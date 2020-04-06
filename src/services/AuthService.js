import BaseService from './BaseService';
import router from '../router/index';


class AuthService extends BaseService {
  async getDataUser(opts = {}) {
    this.endPoint = '/auth/me';
    return this.get(opts);
  }
  login(email, password) {
    this.endPoint = '/auth/login';
    const user = {
      email: email,
      password: password
    };
    return this.post(user);
  }
  loggedIn() {
    const authToken = window.localStorage.getItem('access_token');
    return typeof authToken === 'string' && authToken.length > 0;
  }
  logOut() {
    window.localStorage.clear();
    window.location.reload(true);
    router.push('/login');
  }
}

export default new AuthService();