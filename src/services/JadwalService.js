import BaseService from './BaseService';

class JadwalService extends BaseService {
  async getDataJadwal(opts = {}) {
    this.endPoint = '/jadwals';
    return await this.get(opts);
  }
  async postDataJadwal(payload) {
    this.endPoint = '/jadwals';
    return await this.post(payload);
  }

}
export default new JadwalService();