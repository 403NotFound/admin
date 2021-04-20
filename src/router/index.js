import Vue from 'vue'
import VueRouter from 'vue-router'
// import Layout from '@/layout/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    hidden: true,
  },
]

const router = new VueRouter({
  routes,
})

export default router
