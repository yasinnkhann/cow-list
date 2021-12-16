const express = require('express');
const path = require('path');
const dbIndex = require('../database/index.js');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.json());

app.get('/api/cows', (req, res) => {
  dbIndex.getAllCows((err, cows) => {
    if (err) {
      console.error(err);
      res.status(404).json('Not found');
    } else {
      res.status(200).json(cows);
    }
  })
});

app.post('/api/cows', (req, res) => {
  const { name, description } = req.body;
  const newCow = { name, description }
  dbIndex.createCow(newCow, (err, data) => {
    if (err) {
      console.error(err);
      res.status(400).json('Not able to add cow');
    } else {
      res.status(201).json(req.body);
    }
  })
});

app.put('/api/cows/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const cow = { name, description };
  dbIndex.updateCow(id, cow, (err, data) => {
    if (err) {
      console.error(err);
      res.status(400).json('Not able to update cow');
    } else {
      res.status(200).json(req.body);
    }
  })
});

app.delete('/api/cows/:id', (req, res) => {
  const { name, description } = req.body;
  const { id } = req.params;
  dbIndex.deleteCow(id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(400).json('Not able to delete cow');
    } else {
      res.status(200).json(req.body);
    }
  })
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
