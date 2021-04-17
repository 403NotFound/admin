const Mock = require('mockjs')
const { users, token } = require('./user')

Mock.mock('/api/login', 'post', { users, token })
