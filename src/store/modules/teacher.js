import GuruService from "@/services/GuruService.js";
export const namespaced = true;
export const state = {
  teachers: []
};
export const types = {
  SET_TEACHER: "SET_TEACHER",
  ADD_TEACHER: "ADD_TEACHER"
};
export const mutations = {
  [types.SET_TEACHER](state, payload) {
    state.teachers = payload;
  },
  [types.ADD_TEACHER](state, payload) {
    state.teachers.push(payload);
  }
};
export const actions = {
  async getTeachers({ commit }) {
    try {
      const { data } = await GuruService.getDataGuru();
      commit(types.SET_TEACHER, data.data);
    } catch (error) {
      console.log(error);
    }
  },
  async createTeacher({ commit }, payload) {
    try {
      const { data } = await GuruService.createGuru(payload);
      commit(types.ADD_TEACHER, data.data);
    } catch (error) {
      console.log(error);
    }
  }
};
