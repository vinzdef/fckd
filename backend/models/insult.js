var mongoose = require('mongoose')

var InsultSchema   = new mongoose.Schema({
    text: { type: String, required: true },
	image: String,
	custom: Boolean
})

module.exports = mongoose.model('Insult', InsultSchema)
