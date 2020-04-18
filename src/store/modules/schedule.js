import JadwalService from '@/services/JadwalService';

export const namespaced = true;
export const state = {
  schedules: []
};
export const types = {
  SET_SCHEDULE: "SET_SCHEDULE",
  ADD_SCHEDULE: "ADD_SCHEDULE"
};
export const mutations = {
  [types.SET_SCHEDULE](state, payload) {
    state.schedules = payload;
  },
  [types.ADD_SCHEDULE](state, payload) {
    state.schedules.push(payload);
  }
};
export const actions = {
  async getSchedule({
    commit
  }) {
    try {
      const {
        data
      } = await JadwalService.getDataJadwal();
      commit(types.SET_SCHEDULE, data.data);
    } catch (error) {
      console.log(error);
    }
  },
  async createSchedule({
    commit
  }, payload) {
    try {
      const {
        data
      } = await JadwalService.postDataJadwal(payload);
      commit(types.ADD_SCHEDULE, data.data);
    } catch (error) {
      console.log(error);
    }
  }
};