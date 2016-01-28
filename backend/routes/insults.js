var router = require('express').Router()
var Insult = require('../models/insult')
var noBody = require('../middle/no-body')

router.route('/')

	// CREATE - Save a new Insult in DB and return it
	.post(noBody, function (req, res) {
		//TODO: Secure this route for admin only
		var insult = new Insult()

		insult.text = req.body.text || null
		insult.image = req.body.image || null
		insult.custom = req.body.custom || false

		insult.save(function (err) {
			if (err) res.send(err)
			else res.json({text: insult.text, image: insult.image, custom: insult.custom})
		})
	})

	// RETRIEVE - Return an always increasing array of Insults
	.get(function (req, res) {
		Insult.find(function(err, insults) {
            if (err) res.send(err)
            else res.json(insults)
        })
	})

module.exports = router
