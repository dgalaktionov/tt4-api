var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = process.env.DATABASE_URL || "postgres://ymwtkpslgvcdsd:ZLDz1JNyk8Io6PwWZkXLkYyO0D@ec2-54-225-79-232.compute-1.amazonaws.com:5432/dsnji1r8g5f2r";
var db = pgp(connectionString);
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


