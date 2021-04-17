import { login } from '@/api/user'
import { setToken } from 'utils/auth'

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
