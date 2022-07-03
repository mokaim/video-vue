import Vue from 'vue'
//import App from './App.vue'
import Login from './views/Login.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'boxicons/css/boxicons.min.css'
import VueKakaoSdk from 'vue-kakao-sdk'

const apiKey = '91c2d79e80a75f577863cf2c2dde1b20'

// You have to pass your "Kakao SDK Javascript apiKey"
Vue.use(VueKakaoSdk, { apiKey })


Vue.config.productionTip = false

new Vue({
  render: h => h(Login),
}).$mount('#app')
