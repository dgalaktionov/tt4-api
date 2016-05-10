var pg = require('pg');
var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response) {
  response.send("Hello World");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


