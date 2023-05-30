const express = require('express');
const app = express();
require('./db/config');
const emp = require('./model/emp');

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
