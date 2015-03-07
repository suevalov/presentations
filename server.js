var express = require('express'),
  compress = require('compression'),
  port = process.env.PORT || 8080;

var app = express();
app.use(compress());
app.use('/', express.static(__dirname + '/www'));
app.listen(port);

console.log('Site is available on port: ' + port);
