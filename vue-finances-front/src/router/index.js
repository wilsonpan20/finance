import Vue from 'vue'
import VueRouter from 'vue-router'
import authRoutes from '@/modules/auth/router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...authRoutes, { path: '', redirect: '/login' }]
})

export default router
