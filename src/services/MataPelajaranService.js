import BaseService from './BaseService';

class MataPelajaranService extends BaseService {
  async getDataPelajaran(opts = {}) {
    this.endPoint = '/matapelajarans';
    return await this.get(opts);
  }
  async postDataPelajaran(payload) {
    this.endPoint = '/matapelajarans';
    return await this.post(payload);
  }

}
export default new MataPelajaranService();