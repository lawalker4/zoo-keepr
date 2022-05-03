const express = require ('express');
const app = express();
const {animals} = require('/data/animals');

//make sure this is at the end this is to chain the listen together
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });

  app.get('/api/animals', (req, res) => {
    res.json(animals);
  });