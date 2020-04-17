import BaseService from './BaseService';

class JamService extends BaseService {
  async getDataJam(opts = {}) {
    this.endPoint = '/jampelajarans';
    return await this.get(opts);
  }
  async postDataJam(payload) {
    this.endPoint = '/jampelajarans';
    return await this.post(payload);
  }

}
export default new JamService();