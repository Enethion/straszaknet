export default {
  namespaced: true,
  state: {
    isPrintView: false
  },
  mutations: {
    setCurrentView (state, isPrintView) {
      state.isPrintView = isPrintView
    }
  },
  actions: {
    setPrintView ({ commit, state }) {
      commit('setCurrentView', true)
    },
    unsetPrintView ({ commit, state }) {
      commit('setCurrentView', false)
    }
  },
  getters: {}
}
