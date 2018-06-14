import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/index'

import 'vuetify/dist/vuetify.min.css'
import { sync } from 'vuex-router-sync'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

import pHeading from '@/components/shared/Heading'

Vue.config.productionTip = false

sync(store, router)
Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.base
  }
})

Vue.component('pHeading', pHeading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
