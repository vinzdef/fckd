var CFG = require('../config.js')

var bodyParser = require('body-parser');
var express = require('express');
var router = require('./router')

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

app.listen(CFG.BACK.PORT, function() {
  console.log('\n\n[+]	Serving api on port ',  CFG.BACK.PORT);
});
