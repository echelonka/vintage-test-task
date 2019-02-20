import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBisSqlZ0mwGtPdVz3ox0IZLVuw0MNsMBY',
    libraries: 'places'
  }
})

axios.defaults.baseURL = 'https://httpbin.org'

new Vue({
  render: h => h(App),
}).$mount('#app')
