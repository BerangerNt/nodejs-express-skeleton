/**
 * Application routes
 */

const middlewares = require('../middlewares')

const API_VERSION = 'v1'
const API_PATH = `/api/${API_VERSION}`

// Setup Route Bindings
module.exports = app => {
    // Set apiResponse Objects
    app.all('*', middlewares.api.initAPI)

    app.use(`${API_PATH}/ping`, require('./ping').routes)
    
    // Add default route
    app.get('*', (req, res) => {
        res.apiNotFound(new Error(('Invalid route')))
    })
}
