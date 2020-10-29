const lighthouse = require('lighthouse');
const chromium = require('chromium');
const chromeLauncher = require('chrome-launcher');

const check = async () => {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless'],
    chromePath: chromium.path,
  });

  const options = {
    logLevel: 'info',
    output: 'json',
    onlyAudits: [
      'first-meaningful-paint',
      'speed-index',
      'first-cpu-idle',
      'interactive',
    ],
    chromeFlags: ['--headless'],
    port: chrome.port,
  };

  const result = await lighthouse('https://akqa.com', options);
  await chrome.kill();
  return result;
};

exports.handler = async (event, context, callback) => {
  let result = null;
  try {
    result = await check();
  } catch (error) {
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({ error: error }),
    });
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(result),
  });
};
