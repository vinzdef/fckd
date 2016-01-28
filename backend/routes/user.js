var router = require('express').Router()

router.route('/:id')
	.get(getUser)
	.put(updateUser)

router.route('/')
	.get(getUser)
	.put(updateUser)

function getUser(req, res) {
	/**
	*	Return the current user's data
	**/
	res.json(['UNIMPLEMENTED'])
}

function updateUser(req, res) {
	var id = req.params.id || getIdFromJWT(req.headers[''])
	/**
	*	Update user settings
	**/
	res.json(['UNIMPLEMENTED'])
}

module.exports = router
