var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('<!DOCTYPE html><html><body><script src="moment.js" integrity="sha256-kuGuNFbqjg2SnGqj4qDKWJTkv73g1NAVV90UhYg8M7U= sha512-7LKNMDrYW09A7urbSlKmfJL6FiF76/Voai8qrImxUXPMUfo25KsoI/0oXbsfypNz8KNYqPmbmx03z8Sx9+i8xw==" charset="UTF-8" ></script></body></html>');
});

// This is a cut down example of where the issue is
app.get('/part', function(req, res){
var integrity='sha256-4+SGfVhqRsYxsnYf8GrvTkY7V3Jnk9i4p1TAAaCMg7w= sha512-VaBEQggCzEcaSyuWIfMI9iLi6zhxdW1132dRbQfFB30QBFUv7esQpXSspshSUXhkDRazKM8uoI2BCvD1CukezQ==';
  res.send('<!DOCTYPE html><html><body><script src="part2.js" integrity="'+ integrity +'" charset="UTF-8" ></script></body></html>');
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);
