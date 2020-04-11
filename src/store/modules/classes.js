import KelasService from '@/services/KelasService';

export const namespaced = true;
export const state = {
  classes: []
}
export const types = {
  SET_CLASSES: 'SET_CLASSES'
}
export const mutations = {
  [types.SET_CLASSES](state, payload) {
    state.classes = payload;
  }
}
export const actions = {
  async getClass({
    commit
  }) {
    try {
      const {
        data
      } = await KelasService.getDataKelas();
      commit(types.SET_CLASSES, data);
    } catch (error) {
      console.log(error);
    }

  }
}