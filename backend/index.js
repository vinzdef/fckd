var CFG = require('../config.js')

var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')

var mongoose = require('mongoose')

var router = require('./routes/root')

var app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(morgan('combined'))

app.use('/api', router)
app.use(function(req, res) {
	res.status(404).end()
})

mongoose.connect('mongodb://localhost:27017/fckd')
app.listen(CFG.BACK.PORT, function() {
  console.log('\n\n[+]	Serving api on port ',  CFG.BACK.PORT);
})
