const ping = async (req, res) => {
    res.apiResponse('pong from CI CD process')
}

module.exports = { ping }
