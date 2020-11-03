const ping = require('ping');

module.exports = async (url) => {
  try {
    const urlObject = new URL(url);
    const result = await ping.promise.probe(urlObject.hostname);
    return { ping: result.avg, alive: result.alive };
  } catch (error) {
    return error;
  }
};
