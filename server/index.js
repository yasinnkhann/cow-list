const express = require('express');
const path = require('path');
const { getCows, postCow, editCow, deleteCow } = require('../database/index.js')

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.json());

app.get('/api/cows', (req, res) => {
  getCows((err, cows) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(cows);
    }
  });
});

app.post('/api/cows', (req, res) => {
    const { name, description } = req.body;
    const cowInfo = { name, description };

    postCow(cowInfo, (err, newCow) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(newCow);
    }
  });
});

app.put('/api/cows/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  const newCowDetails = { name, description }

  editCow(id, newCowDetails, (err, updatedCow) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(updatedCow);
    }
  });
});

app.delete('/api/cows/:id', (req, res) => {
  const { id } = req.params;

  deleteCow(id, (err, deletedCow) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(deletedCow);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
