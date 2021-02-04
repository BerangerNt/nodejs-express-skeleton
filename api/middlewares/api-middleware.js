/*
 * API middleware
 *
 *
 * `res.apiResponse(data)`
 * `res.apiError(key, err, msg, code)`
 * `res.apiNotFound(err, msg)`
 * `res.apiNotAllowed(err, msg)`
 */


const initAPI = (req, res, next) => {
    // Utility methods
    res.apiResponse = data => {
        if (req.query.callback) {
            res.jsonp(data)
        } else {
            res.json(data)
        }
    }

    res.apiError = (status, err, info) => {
        res.status(status || 500)
        res.apiResponse({
            success: false,
            message: err.message || info
        })
    }

    // Handler for HTTP response codes : errors
    res.apiNotFound = (err, info) => {
        res.apiError(404, err, info || 'Data not found')
    }

    res.apiBadRequest = (err, info) => {
        res.apiError(400, err, info || 'Bad request')
    }

    res.apiUnauthorized = (err, info) => {
        res.apiError(401, err, info || 'Unauthorized operation')
    }

    res.apiForbidden = (err, info) => {
        res.apiError(403, err, info || 'Request forbidden')
    }

    res.apiNotAllowedMethod = (err, info) => {
        res.apiError(405, err, info || 'Method not allowed')
    }

    next()
}

module.exports = { initAPI }
