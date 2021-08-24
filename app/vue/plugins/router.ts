import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import HomePage from '~pages/home/home.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/', component: HomePage, name: 'home', meta: { requiresAuth: true },
  },
  {
    path: '*', redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

export default router
