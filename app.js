var express = require('express');
var serveIndex = require('serve-index');
var serveStatic = require('serve-static');
var app = express();

app.use('/public', express.static(__dirname + '/public'));
app.use('/public2', serveStatic(__dirname + '/public'), serveIndex(__dirname + '/public', {
  'icons': true,
  'view': 'details',
}));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});