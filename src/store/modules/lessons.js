import MataPelajaranService from '@/services/MataPelajaranService';

export const namespaced = true;
export const state = {
  lessons: []
}
export const types = {
  SET_LESSONS: "SET_LESSONS",
  ADD_LESSONS: "ADD_LESSONS"
}

export const mutations = {
  [types.SET_LESSONS](state, payload) {
    state.lessons = payload
  },
  [types.ADD_LESSONS](state, payload) {
    state.lessons.push(payload);
  }
}
export const actions = {
  async getLessons({
    commit
  }) {
    try {
      const {
        data
      } = await MataPelajaranService.getDataPelajaran();
      commit(types.SET_LESSONS, data.data);
    } catch (error) {
      console.log(error);

    }
  },
  async createLessons({
    commit
  }, payload) {
    try {
      const {
        data
      } = await MataPelajaranService.postDataPelajaran(payload);
      commit(types.ADD_LESSONS, data.data);
    } catch (error) {
      console.log(error);

    }
  }
}