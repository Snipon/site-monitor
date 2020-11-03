const ping = require('./ping');
const express = require('express');

const app = express();
const port = 3001;

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res) => {
  try {
    res.statusCode = 418;
    res.send('( ͡° ͜ʖ ͡°)');
  } catch (error) {
    console.log(error);
  }
});

app.get('/ping', async (req, res, next) => {
  try {
    const { url } = req.query;

    if (!url) {
      res.status(400).send('No URL param...');
    }

    const output = await ping(url);
    res.status(200).json(output);
  } catch (error) {
    next(error);
  }
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
