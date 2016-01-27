var CFG = require('../config.js')
var express = require('express');
var app = express();
app.use(express.static('./'));
app.listen(CFG.FRONT.PORT, function() {
  console.log('\n\n\t[+] Serving client on port ', CFG.FRONT.PORT);
});
