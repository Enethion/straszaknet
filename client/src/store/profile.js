// import HTTP from '@/http.js'

export default {
  namespaced: true,
  state: {
    profile: ''
  },
  mutations: {
    setProfile (state, profile) {
      state.profile = profile
    }
  },
  actions: {
    fetchProfile ({ commit, state }) {
      // return HTTP()
      //   .get('profile')
      //   .then(({ data }) => {
      //     commit('setProfile', data)
      //   })

      const data = `<strong>PHP Developer za dnia.</strong> Piwowar,
      gitarzysta, stwórca i niszczyciel światów
      nocą. Staram się by kod, który piszę, był
      coraz lepszy. Jestem świadom swoich
      braków i chętnie korzystam z wiedzy
      innych, by je załatać. Robię to co lubię i
      lubię to co robię.`
      commit('setProfile', data)
    }
  },
  getters: {}
}
