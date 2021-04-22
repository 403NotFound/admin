import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    hidden: true,
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'eleme', affix: true },
      },
    ],
  },
  {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: { title: 'Documentation', icon: 'folder', affix: true },
      },
    ],
  },
  {
    path: '/deep',
    component: Layout,
    meta: { title: 'Deep', icon: 'camera' },
    redirect: '/deep/deep1/deep1',
    children: [
      {
        path: 'deep1',
        component: () => import('@/views/deep/index'),
        name: 'Deep1',
        meta: { title: 'Deep1' },
        redirect: '/deep/deep1/deep1',
        children: [
          {
            path: 'deep1',
            component: () => import('@/views/deep/deep1/index'),
            name: 'deep1',
            meta: { title: 'deep1' },
          },
          {
            path: 'deep2',
            component: () => import('@/views/deep/deep2/index'),
            name: 'deep2',
            meta: { title: 'deep2' },
          },
        ],
      },
      {
        path: 'deep3',
        component: () => import('@/views/deep/deep3/index'),
        name: 'deep3',
        meta: { title: 'deep3' },
      },

      {
        path: 'deep4',
        component: () => import('@/views/deep/deep3/index'),
        name: 'deep4',
        meta: { title: 'deep4' },
      },
    ],
  },
]

const router = new VueRouter({
  routes: constantRoutes,
})
// 解决访问重复路由报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
export default router
