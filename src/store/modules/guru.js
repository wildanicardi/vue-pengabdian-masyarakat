import GuruService from '@/services/GuruService.js';
import {
  types
} from './auth';

export default {
  namespaced = true,
  state: {
    guru: null
  },
  types: {
    SET_GURU: 'SET_GURU'
  },
  mutations: {
    [types.SET_GURU](state, guru) {
      state.guru = guru
    }
  },
  actions: {
    async indexGuru({
      commit
    }) {
      try {
        const {
          data
        } = await GuruService.getDataGuru();
        commit(types.SET_GURU, data);
      } catch (error) {
        console.log(error);
      }

    }
  }
}