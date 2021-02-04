const routes = require('express').Router()
const { ping } = require('./handler')

routes.get('/', ping)

module.exports = routes
