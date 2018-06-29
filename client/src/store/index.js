import createPersistedState from 'vuex-persistedstate'
import Vue from 'vue'
import Vuex from 'vuex'

import profile from '@/store/profile'
import contact from '@/store/contact'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    baseURL: 'api/'
  },
  modules: {
    profile,
    contact
  },
  mutations: {

  },
  actions: {

  },
  plugins: [
    createPersistedState()
  ]
})
