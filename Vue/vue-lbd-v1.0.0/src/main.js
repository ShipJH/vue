import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

// router setup
import routes from './routes/routes'
// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)

import axios from 'axios'
Vue.prototype.$http = axios

Vue.prototype.$appUrl = 'http://localhost:8080'

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
