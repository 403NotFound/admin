import { login, getInfo } from '@/api/user'
import { setToken } from 'utils/auth'
import { asyncRoutes } from '@/router/modules/constant'

export const actionLogin = ({ commit }, userInfo) => {
  const { username, password } = userInfo
  return new Promise((resolve, reject) => {
    login({ username: username.trim(), password })
      .then((res) => {
        const { data } = res
        console.log(data)
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve(data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const getUserInfo = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    getInfo(state.token)
      .then(({ data }) => {
        const { roles, name, avatar, introduction } = data
        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        resolve(data)
      })
      .catch((err) => reject(err))
  })
}

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role))
  } else {
    return true
  }
}

export function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach((route) => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      console.log(tmp)
      res.push(tmp)
    }
  })

  return res
}

export const generateRoutes = ({ commit }, roles) => {
  return new Promise((resolve) => {
    let accessedRoutes
    if (roles.includes('admin')) {
      accessedRoutes = asyncRoutes || []
    } else {
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
    }
    commit('SET_ROUTES', accessedRoutes)
    resolve(accessedRoutes)
  })
}

export const changeSideBarStates = ({ commit }) => {
  commit('SET_SIDEBAR_OPENED')
}
