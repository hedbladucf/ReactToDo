/* Showing Mongoose's "Populated" Method (18.3.8)
 * INSTRUCTOR ONLY
 * =============================================== */

// REQUIRED DEPENDENCIES
var express = require('express');
var app = express();
var logger = require('morgan');
// Notice: Our scraping tools are prepared, too


// use morgan and bodyparser with our app
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));


// make public a static dir
app.use(express.static('public'));

// Setup for Heroku
var PORT = process.env.PORT || 3000;


// listen on port 3000
// added process.env.PORT above to make it ready for Heroku
app.listen(PORT, function() {
  console.log('App running on port 3000!');
});