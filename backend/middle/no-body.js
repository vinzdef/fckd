module.exports = function noBody(req, res, next) {
	if (typeof arguments[0] == 'string') {
		var message = req
		return function noBody(req, res, next) {
			if (!req.body  || Object.keys(req.body).length == 0) res.status(400).send({ message: message || 'No data provided' })
		}
	}

	if (!req.body || Object.keys(req.body).length == 0) res.status(400).send({ message: 'No data provided' })
	else next()
}
