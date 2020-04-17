import JamService from '@/services/JamService';

export const namespaced = true;
export const state = {
  times: []
};
export const types = {
  SET_TIMES: "SET_TIMES",
  ADD_TIMES: "ADD_TIMES"
};
export const mutations = {
  [types.SET_TIMES](state, payload) {
    state.times = payload;
  },
  [types.ADD_TIMES](state, payload) {
    state.times.push(payload);
  }
};
export const actions = {
  async getTimes({
    commit
  }) {
    try {
      const {
        data
      } = await JamService.getDataJam();
      commit(types.SET_TIMES, data.data);
    } catch (error) {
      console.log(error);
    }
  },
  async createTimes({
    commit
  }, payload) {
    try {
      const {
        data
      } = await JamService.postDataJam(payload);
      commit(types.ADD_TIMES, data.data);
    } catch (error) {
      console.log(error);
    }
  }
};