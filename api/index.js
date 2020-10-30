const ping = require('./ping');
const express = require('express');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  try {
    res.statusCode = 418;
    res.send('( ͡° ͜ʖ ͡°)');
  } catch (error) {
    console.log(error);
  }
});

app.get('/ping', async (req, res) => {
  try {
    const output = await ping();
    res.statusCode = 200;
    res.json(output);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
