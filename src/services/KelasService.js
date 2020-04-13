import BaseService from './BaseService';

class KelasService extends BaseService {
  async getDataKelas(opts = {}) {
    this.endPoint = '/kelas';
    return await this.get(opts)
  }
  async postDataKelas(payload) {
    this.endPoint = '/kelas';
    return await this.post(payload);
  }
}
export default new KelasService();