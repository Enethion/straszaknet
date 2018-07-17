import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import E404 from './views/E404.vue'

Vue.use(Router)

export default new Router({
  mode: process.env.NODE_ENV === 'development' ? 'hash' : 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: 'e404',
      component: E404
    }
  ]
})
