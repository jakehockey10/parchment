/*

Parchment server
================

Copyright (c) 2013 The Parchment Contributors
BSD licenced
https://github.com/curiousdannii/parchment

*/

/**
 * Jake Smith
 */

var express = require( 'express' );
var path = require ('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/')));

app.use('/index', routes);
app.use('/users', users);

app.get('/stories', function (req, res) {
    res.send('stories');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
//
//app.use( express.compress() );
//app.use( express.static( __dirname + '/../' ) );

// Didn't seem to be working at the time.
//app.use(function(req, res, next) {
//    var herokuKey = btoa(':' + process.env.AUTH_TOKEN + '\n');
//    req.header('Accept', 'application/vnd.heroku+json; version=3');
//    req.header('Authorization', herokuKey);
//    next();
//});

//app.get('/stories', function (req, res) {
//    res.send('stories');
//});

//var port = process.env.PORT || 3000;
//app.listen( port );
//console.log( 'Parchment server started on port: ' + port );