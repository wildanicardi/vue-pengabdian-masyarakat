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
    window.localStorage.setItem('access_token', response.data.access_token);
    commit(types.SET_TOKEN, response.data.access_token);
    return response;
  },
  async logOut({
    state
  }) {
    state.token = null;
    await AuthService.logOut();
  }
}
export const getters = {}