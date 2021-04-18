import router from './router'
import { getToken } from 'utils/auth'

const whiteRouteList = ['/login']

router.beforeEach((to, from, next) => {
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
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
