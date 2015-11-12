var subdomain = require('express-subdomain');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('./configs/database');
// Mongoose import
// var mongoose = require('mongoose');

// require all models for application
// mongoose.connect('mongodb://localhost/sems');

// for layout purpose

var renderPage = require('./server_scripts/routes/index');
// var apiRoutes = require('./server_scripts/routes/users');
var app = express();


// view engine setup
var expressLayouts = require('express-ejs-layouts')
app.set('views', path.join(__dirname, 'client_scripts/views'));
app.set('view engine', 'ejs');
app.set('view options', { locals: { scripts: ['jquery.js'] } });
app.set('layout', 'layout')
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client_scripts/public')));
app.use(expressLayouts)
var routes = {};
routes.user = require(process.cwd() + "/server_scripts/model/user.js");

app.use('/api/users', routes.user.index);
// admin.use('/api/', apiRoutes);
app.use('/', renderPage);

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
