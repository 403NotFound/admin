import router from './router'
import { getToken } from 'utils/auth'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const whiteRouteList = ['/login']
NProgress.configure({ showSpinner: false }) // 关闭右上角转圈loading

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          const { roles } = await store.dispatch('getUserInfo')
          // TODO: 根据 roles 动态加载路由表并写入 vuex 中，存储当前路由表至 vuex
          const accessRoutes = await store.dispatch('generateRoutes', roles)

          router.addRoutes(accessRoutes)
          next({ ...to, replace: true })
        } catch (e) {
          throw new Error(e)
        }
      }
    }
    next()
    // TODO: 登录权限路由访问
  } else {
    if (whiteRouteList.indexOf(to.path) !== -1) {
      next()
    }
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})
