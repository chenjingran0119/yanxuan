//入口js
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueLazyload from 'vue-lazyload'
import loadingGIF from "../static/loading.gif"
//适配
import 'lib-flexible/flexible'
/* eslint-disable no-new */
import './mock/mockServer'

Vue.use(VueLazyload,{
  error:'../staic/error.jpg',
  loading: loadingGIF
})


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

