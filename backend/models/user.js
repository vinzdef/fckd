var mongoose = require('mongoose')

var EmailValidator = require('../validators/email')
var MD5Validator = require('../validators/md5')

var UserSchema   = new mongoose.Schema({
    mail: { type: String, required: true, unique: true, validate: {
		validator: function (email) {
			return EmailValidator.test(email)
		},
		message: 'The email is invalid.'
	}},
	
  	password: { type: String, required: true, validate: {
		validator: function (password) {
			return MD5Validator.test(password)
		},
		message: "The password is not in a valid format."
	}},

	remaining: Number,
	last: Date,

	//Number of hours between every insult
	every: Number
})

module.exports = mongoose.model('User', UserSchema)
