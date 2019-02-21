import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VueGoogleMaps from 'vue2-google-maps'
import config from '../config'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueGoogleMaps, {
  load: {
    key: config.googleAPIKey,
    libraries: 'places'
  }
})

axios.defaults.baseURL = 'https://httpbin.org'

new Vue({
  render: h => h(App),
}).$mount('#app')
