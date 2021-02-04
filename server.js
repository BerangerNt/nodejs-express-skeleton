'use strict'

// Load deps
const http = require('http')
const app = require('./api/app')
// const logger = require('./api/logger')

/* Server creation
 * --------------- */

// Define app port
const appPort = process.env.PORT || 3000
app.set('port', appPort)

// Create Web server
http
    .createServer(app)
    .listen(
        appPort,
        () => console.log(`Node app running at localhost:${appPort}`)
    )
