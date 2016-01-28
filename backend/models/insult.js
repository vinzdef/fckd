var mongoose = require('mongoose')
var HTTPValidator = require('../validators/http-validator')

var InsultSchema   = new mongoose.Schema({
    text: { type: String, required: true },
	image: {type: String, validate: {
		validator: function (image) {
			return HTTPValidator.test(image)
		},
		message: "Image data is not a link"
	}
	custom: Boolean
})

module.exports = mongoose.model('Insult', InsultSchema)
