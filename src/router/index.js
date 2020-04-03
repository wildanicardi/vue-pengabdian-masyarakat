import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    props: true
  },
  {
    path: '/guru',
    name: 'Guru',
    component: () => import('../views/Guru.vue'),
    props: true
  },
  {
    path: '/absensi',
    name: 'Absensi',
    component: () => import('../views/Absensi.vue'),
    props: true
  },
  {
    path: '/mata-pelajaran',
    name: 'Matapelajaran',
    component: () => import('../views/Matapelajaran.vue'),
    props: true
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router