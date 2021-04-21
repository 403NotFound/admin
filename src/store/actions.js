import { login, getInfo } from '@/api/user'
import { setToken } from 'utils/auth'
import { constantRoutes } from '@/router/modules/constant'

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

export const generateRoutes = ({ commit, state }) => {
  return new Promise((resolve) => {
    let accessRoutes = constantRoutes
    commit('SET_ROUTES', accessRoutes)
    resolve(accessRoutes)
  })
}

export const changeSideBarStates = ({ commit }) => {
  commit('SET_SIDEBAR_OPENED')
}
