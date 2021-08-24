import 'core-js/stable'
import 'regenerator-runtime/runtime'

import '../stylesheets/application.scss'

import Vue from 'vue'
import VueScreen from 'vue-screen'
import VueAxios from 'vue-axios'

import App from '../layouts/app.vue'

import axios from '~plugins/axios'
import router from '~plugins/router'

Vue.use(VueAxios, axios)
Vue.use(VueScreen, 'tailwind')

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: (h) => h(App),
    router,
  }).$mount()
  document.body.appendChild(app.$el)
})
