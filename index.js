var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/tt4";
var db = pgp(connectionString);
var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function defaultAnswer(request, response) {
	response.send("Hello World");
}

app.get('/', defaultAnswer);

app.get('/points', function (req, res) {
  db.any('select * from points')
    .then(function (data) {
      res.status(200)
        .json(data);
    });
});

app.post('/points', function (req, res) {
  db.none('insert into points(nombre, lat, lon)' +
      'values(${nombre}, ${lat}, ${lon})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one point'
        });
    })
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


