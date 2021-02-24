const ping = async (req, res) => {
    res.apiResponse('pong from CI CD process, root user')
}

module.exports = { ping }
