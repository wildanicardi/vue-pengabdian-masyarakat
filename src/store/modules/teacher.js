import GuruService from '@/services/GuruService.js';
export const namespaced = true;
export const state = {
  teachers: []
}
export const types = {
  SET_TEACHER: 'SET_TEACHER'
}
export const mutations = {
  [types.SET_TEACHER](state, payload) {
    state.teachers = payload;
  }
}
export const actions = {
  async getTeachers({
    commit
  }) {
    try {
      const {data} = await GuruService.getDataGuru();
      commit(types.SET_TEACHER,data);
    } catch (error) {
      console.log(error);
    }

  }
}