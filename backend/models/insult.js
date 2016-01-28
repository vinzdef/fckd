var mongoose = require('mongoose')
var HTTPValidator = require('../validators/http-validator')

//TODO: Add a computed normalized version of the text as an unique property
var InsultSchema = new mongoose.Schema({
    text: { type: String, required: true },
	custom: Boolean,

	image: {type: String, validate: {
		validator: function (image) {
			return HTTPValidator.test(image)
		},
		message: "Image data is not a link"
	}}
})

module.exports = mongoose.model('Insult', InsultSchema)
