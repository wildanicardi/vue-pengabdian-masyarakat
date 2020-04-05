import axios from 'axios';
import NProgress from "nprogress";
class BaseService {
  constructor() {
    this.endPoint = '';
    this.setBaseUrl();
  }
  setBaseUrl() {
    const apiClient = axios.create({
      baseURL: process.env.API_URL
    });
    apiClient.interceptors.response.use((response) => {
      NProgress.start();
      return response
    }, (err) => {
      if (err.response.status === 401) {

      }
      return Promise.reject(err);
    });
    apiClient.interceptors.response.use(config => {
      NProgress.done();
      return config;
    })
  }
  includeDefault(options) {
    let access_token = window.localStorage.getItem('access_token') ? window.localStorage.getItem('access_token') : null;
    const headers = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`
      },
      timeout: 1000
    };
    return Object.assign(headers, options);
  }
  // method
  get(options = {}) {
    const opts = this.includeDefault(options);
    return apiClient.get(this.endPoint, opts);
  }

  post(data, options = {}) {
    const opts = this.includeDefault(options);
    return apiClient.post(this.endPoint, data, opts);
  }
  put(data, options = {}) {
    const opts = this.includeDefault(options);
    return apiClient.put(this.endPoint, data, opts)
  }
  putOne(id, options = {}) {
    const opts = this.includeDefault(options);
    return apiClient.put(this.endPoint + '/' + id, opts);
  }
  delete(id, options = {}) {
    const opts = this.includeDefault(options);
    return apiClient.delete(this.endPoint + '/' + id, opts);
  }
}

export default BaseService;