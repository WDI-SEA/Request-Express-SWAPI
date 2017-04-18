var request = require('request');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

// http://swapi.co/api/people
app.get('/:movieId', function(req, res) {
  request('http://swapi.co/api/films/' + req.params.movieId, function(error, response, body) {
    // res.send(body);
    res.render('starwars', {ships: JSON.parse(body).starships})
  });
});

console.log('running on port 3000');
app.listen(3000);