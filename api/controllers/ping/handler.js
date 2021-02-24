const ping = async (req, res) => {
    res.apiResponse('pong')
}

module.exports = { ping }
