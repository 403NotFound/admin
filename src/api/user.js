import $http from '../utils/request'

export const login = ({ username, password }) => {
  return $http({
    url: '/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}