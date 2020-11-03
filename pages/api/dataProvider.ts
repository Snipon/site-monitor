import axios from 'axios';
export default class DataProvider {
  apiEndpoint = 'http://localhost:3001';
  public async ping(url) {
    const result = await axios.get(`http://localhost:3001/ping?url=${url}`);
    return result.data;
  }
}
