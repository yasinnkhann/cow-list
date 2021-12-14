const express = require('express');
const path = require('path');
const dbIndex = require('../database/index.js');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.json());

app.get('/api/cows', (req, res) => {
  dbIndex.getAll((err, cows) => {
    if (err) {
      console.error(err);
    } else {
      res.json(cows);
    }
  })
});

app.post('/api/cows', (req, res) => {
  const { name, description } = req.body;
  const newCow = { name, description }
  dbIndex.create(newCow, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send('Posted!')
    }
  })
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
