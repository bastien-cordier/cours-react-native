import Axios from 'axios';
import {API_URL, API_KEY} from '../config';

class APIRoot {
  path;

  constructor(path) {
    this.path = path;
  }

  api(headers = {}) {
    return Axios.create({
      baseURL: `${API_URL}${this.path}`,
      headers: {
        'Content-Type': 'application/json',
        ...(headers ?? {}),
      },
      params: {
        apiKey: API_KEY,
      },
    });
  }

  api2(headers = {}) {
    const token = 'mytoken';

    return Axios.create({
      baseURL: `${API_URL}${this.path}`,
      headers: {
        'Content-Type': 'application/json',
        ...(headers ?? {}),
        token: `Bearer ${token}`,
      },
      params: {
        apiKey: API_KEY,
      },
    });
  }

  async api3(headers = {}) {
    const token = /*await*/ 'getmytoken';

    return Axios.create({
      baseURL: `${API_URL}${this.path}`,
      headers: {
        'Content-Type': 'application/json',
        ...(headers ?? {}),
        token: `Bearer ${token}`,
      },
      params: {
        apiKey: API_KEY,
      },
    });
  }
}

export default APIRoot;
