const Mock = require('mockjs')
const users = require('./user')

Mock.mock('/api/login', 'post', users)
