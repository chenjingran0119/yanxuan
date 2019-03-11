//入口js
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//适配
import 'lib-flexible/flexible'
/* eslint-disable no-new */
import './mock/mockServer'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

