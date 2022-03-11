// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import './assets/css/app.css'
import './assets/css/iconfont.css'
import './assets/css/global.css'
import VeChart from 'v-charts'

import Axios from 'axios'
import qs from 'qs'
Vue.prototype.$http = Axios
Vue.use(elementUI)
Vue.use(VeChart)
Vue.prototype.axios = Axios
Vue.prototype.qs = qs

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
