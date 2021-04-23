import $http from '../utils/request'

export const login = ({ username, password }) => {
  return $http({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password,
    },
  })
}

export const getInfo = (token) => {
  return $http({
    url: '/user/info',
    method: 'get',
    data: { token },
  })
}

export const logout = (token) => {
  return $http({
    url: '/user/logout',
    method: 'post',
    data: { token },
  })
}
