import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/store/modules/auth.js';
import * as teacher from '@/store/modules/teacher.js';
import * as classes from '@/store/modules/classes.js';
import * as lessons from '@/store/modules/lessons.js';
import * as time from '@/store/modules/time.js';
import * as schedule from '@/store/modules/schedule.js';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    teacher,
    classes,
    lessons,
    time,
    schedule
  }
})