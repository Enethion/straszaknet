// import HTTP from '@/http.js'
// import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    contacts: []
  },
  mutations: {
    setContacts (state, contacts) {
      state.contacts = contacts
    }
  },
  actions: {
    fetchContacts ({ commit, state }) {
      // return HTTP()
      //   .get('contacts')
      //   .then(({ data }) => {
      //     commit('setContacts', data)
      //   })
      //   .catch(() => {
      //   })

      const data = [
        { icon: 'phone', value: '+48 516-539-185', link: 'none' },
        { icon: 'email', value: 'piotr@straszak.net', link: 'email' },
        { icon: 'earth', value: 'http://straszak.net/', link: 'url' },
        { icon: 'map-marker', value: 'ul. Nad Sudołem 32/65<br>31-228 Kraków', link: 'none', isHidden: true }
      ]

      commit('setContacts', data)
    }
  },
  getters: {}
}
