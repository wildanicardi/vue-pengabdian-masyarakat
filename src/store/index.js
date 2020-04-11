import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/store/modules/auth.js';
import * as teacher from '@/store/modules/teacher.js';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    teacher
  }
})