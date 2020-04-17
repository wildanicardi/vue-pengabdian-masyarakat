import BaseService from './BaseService';

class GuruService extends BaseService {
  async getDataGuru(opts = {}) {
    this.endPoint = '/users';
    return await this.get(opts);
  }
  async createGuru(payload) {
    this.endPoint = '/guru';
    return await this.post(payload);
  }
  async createUser(payload) {
    this.endPoint = '/users';
    return await this.post(payload);
  }
}
export default new GuruService();