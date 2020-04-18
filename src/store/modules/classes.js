import KelasService from "@/services/KelasService";

export const namespaced = true;
export const state = {
  classes: []
};
export const types = {
  SET_CLASSES: "SET_CLASSES",
  ADD_CLASSES: "ADD_CLASSES"
};
export const mutations = {
  [types.SET_CLASSES](state, payload) {
    state.classes = payload;
  },
  [types.ADD_CLASSES](state, payload) {
    state.classes.push(payload);
  }
};
export const actions = {
  async getClass({
    commit
  }) {
    try {
      const {
        data
      } = await KelasService.getDataKelas();
      commit(types.SET_CLASSES, data.data);
    } catch (error) {
      console.log(error.message);
    }
  },
  async creatClass({
    commit
  }, payload) {
    try {
      const {
        data
      } = await KelasService.postDataKelas(payload);
      commit(types.ADD_CLASSES, data.data);
    } catch (error) {
      console.log(error);
    }
  }
};