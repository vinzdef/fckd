var router = require('express').Router()
var noBody = require('../middle/no-body')

var User = require('../models/user')

router.route('/login')
	.post(noBody, function (req, res) {
		User.findOne({mail: req.body.mail}, function (err, user) {
			if (err) res.send(err)
			//TODO: Return JWT
			else res.json(user)
		})

		res.json({})
	})

router.route('/signup')
	.post(noBody, function (req, res) {
		var user = new User({
			mail: req.body.mail || null,
			password: req.body.password || null
		})

		user.save(function (err) {
			err ? res.send(err)
				: res.json(user)
		})
	})

router.route('/reset')
	.put(noBody, function (req, res) {
		/**
		*	Reset user password and set the new one
		*	Return UPDATED or error, eventually redirect to login
		**/
		res.json(['UNIMPLEMENTED'])
	})

router.route('/verify')
	.post(noBody, function (req, res) {
		/**
		*	Read the user's verification token he got via email
		*	Return JWT or error
		**/
		res.json(['UNIMPLEMENTED'])
	})

module.exports = router
