var router = require('express').Router()

/**
*	ROUTES:
*
*		/insults
*			GET serves fresh insults as a JSON array
*
*		/profile
*			GET  the current user's profile data
*			POST update user settings and data
*
*		/signup
*			POST signup with user data and get a token
*
*		/login
*			POST login with new data and get a token
**/

router.route('/insults')
	.get(function(req, res) {
    	res.json(require('./data/insults.json'));
	})

router.route('/profile')
	.get(function(req, res) {
		//TODO: auth middleware and return actual user
		res.json(['GET PROFILE'])
	}).post(function (req, res) {
		//TODO: auth middleware and set user model (with safe checks)
		res.json(['POST PROFILE'])
	})

router.route('/signup')
	.post(function (req, res) {
		//TODO: implement signup
		res.json(['POST SIGNUP'])
	})

router.route('/login')
	.post(function (req, res) {
		//TODO: implement login
		res.json(['POST LOGIN'])
	})

router.route('/signup')

module.exports = router
