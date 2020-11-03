const ping = require('ping');

module.exports = async (url) => {
  try {
    const urlObject = new URL(url);
    const options = {
      timeout: 2,
      min_reply: 1,
    };
    const result = await ping.promise.probe(urlObject.hostname, options);
    return { ping: result.avg, alive: result.alive };
  } catch (error) {
    return error;
  }
};
