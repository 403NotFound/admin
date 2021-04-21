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
// 解决访问重复路由报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
export default router
