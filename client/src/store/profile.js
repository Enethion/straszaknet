import HTTP from '@/http.js'

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
      return HTTP()
        .get('profile')
        .then(({ data }) => {
          commit('setProfile', data)
        })
        .catch(() => {
          const data = `<strong>Lorem ipsum dolor</strong> sit amet consectetur, adipisicing elit. Dolore aliquid consequuntur cum tenetur commodi aut. Dolorem autem, nobis aperiam, eligendi cupiditate explicabo rerum beatae consequatur praesentium, aut nihil sapiente dolore.`
          commit('setProfile', data)
        })
    }
  },
  getters: {}
}
