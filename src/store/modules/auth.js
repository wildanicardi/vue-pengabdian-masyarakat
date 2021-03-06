import AuthService from "@/services/AuthService.js";
export const namespaced = true;
export const state = {
  token: null
}
export const types = {
  SET_TOKEN: 'SET_TOKEN'
}
export const mutations = {
  [types.SET_TOKEN](state, token) {
    state.token = token;
  }
}

export const actions = {
  async logIn({
    commit
  }, payload) {
    const {
      email,
      password
    } = payload;
    const response = await AuthService.login(email, password);
    if (!response.data.success) {
      return response;
    }
    commit(types.SET_TOKEN, response.data.access_token);
    window.localStorage.setItem('access_token', response.data.access_token);
    return response;
  },
  async logOut({
    state
  }) {
    window.localStorage.removeItem('access_token');
    state.token = null;
    await AuthService.logOut();
  }
}
export const getters = {}