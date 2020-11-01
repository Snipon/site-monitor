import axios from 'axios';
import config from '../../config.json';

export default class DataProvider {
  apiEndpoint = process.env.API_ENDPOINT;
  public get config() {
    return config;
  }
  public async ping() {
    const result = await axios.get(`${this.apiEndpoint}/ping`);
    return result.data;
  }
}
