var express = require('express');
var app = express();
app.use('/', express.static('public'));
app.listen(4001, function() { console.log('listening'); });
