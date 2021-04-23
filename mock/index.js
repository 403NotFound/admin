const Mock = require('mockjs')
const { users, token, userInfo } = require('./user')

Mock.mock('/api/user/login', 'post', { users, token })
Mock.mock('/api/user/info', 'get', userInfo[token])
Mock.mock('/api/user/logout', 'post', { code: 200, msg: 'log out success' })
