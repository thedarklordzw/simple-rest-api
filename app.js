const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('/user', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.json({ user: 'Ulathi' });
});

app.listen(8080, () => console.log('Port is running'));
