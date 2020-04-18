import axios from 'axios';
import NProgress from "nprogress";
// import AuthService from './AuthService';
class BaseService {
  constructor() {
    this.endPoint = '';
    this.setBaseUrl();
  }
  setBaseUrl() {
    this.apiClient = axios.create({
      baseURL: 'http://127.0.0.1:8000/api'
    });
    this.apiClient.interceptors.response.use((response) => {
      NProgress.start();
      return response
    }, (err) => {
      // if (err.response.status === 401) {
      //   AuthService.logOut();
      // }
      return Promise.reject(err);
    });
    this.apiClient.interceptors.response.use((response) => {
      NProgress.done();
      return response
    });
  }
  includeDefault(options) {
    let access_token = window.localStorage.getItem('access_token') ? window.localStorage.getItem('access_token') : null;
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`
      }
    };
    return Object.assign(headers, options);
  }
  // method
  get(options = {}) {
    const opts = this.includeDefault(options);
    return this.apiClient.get(this.endPoint, opts);
  }

  post(data, options = {}) {
    const opts = this.includeDefault(options);
    return this.apiClient.post(this.endPoint, data, opts);
  }
  put(data, options = {}) {
    const opts = this.includeDefault(options);
    return this.apiClient.put(this.endPoint, data, opts)
  }
  putOne(id, options = {}) {
    const opts = this.includeDefault(options);
    return this.apiClient.put(this.endPoint + '/' + id, opts);
  }
  delete(id, options = {}) {
    const opts = this.includeDefault(options);
    return this.apiClient.delete(this.endPoint + '/' + id, opts);
  }
  // postLogin(data) 

  //   return this.apiClient.post(this.endPoint, data);
  // }
}

export default BaseService;