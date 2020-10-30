const ping = require('ping');
const config = require('../config.json');

module.exports = async () => {
  try {
    const results = [];
    for (site of config.sites) {
      const url = new URL(site.url);
      const result = await ping.promise.probe(url.hostname);
      const { avg, alive } = result;
      results.push({ id: site.id, name: site.name, ping: avg, alive });
    }

    return Promise.all(results);
  } catch (error) {
    return error;
  }
};
