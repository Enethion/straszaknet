import createPersistedState from 'vuex-persistedstate'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    baseURL: 'api/'
  },
  modules: {

  },
  mutations: {

  },
  actions: {

  },
  plugins: [
    createPersistedState()
  ]
})
