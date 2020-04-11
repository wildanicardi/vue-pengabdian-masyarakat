import BaseService from './BaseService';

class KelasService extends BaseService {
  async getDataKelas(opts = {}) {
    this.endPoint = '/kelas';
    return await this.get(opts)
  }
}
export default new KelasService();