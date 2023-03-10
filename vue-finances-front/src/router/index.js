import Vue from 'vue'
import Router from 'vue-router'

import { AUTH_TOKEN } from '@/plugins/apollo'
import authRoutes from '@/modules/auth/router'
import dashboardRoutes from '@/modules/dashboard/router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...authRoutes,
    ...dashboardRoutes,
    { path: '', redirect: '/login' }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    const token = window.localStorage.getItem(AUTH_TOKEN)
    const loginRoute = {
      path: '/login',
      query: { redirect: to.fullPath }
    }
    if (token) {
      try {
        return next()
      } catch (error) {
        console.log('Auto Login Error: ', error)
        return router.push(loginRoute)
      }
    }
    return router.push(loginRoute)
  }
  next()
})

export default router
