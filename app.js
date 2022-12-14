var createError = require('http-errors');
var hbs = require('hbs');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');


var indexRouter = require('./app_server/routes/index');
var routesApi = require('./app_api/routes/index');
var usersRouter = require('./app_server/routes/users');

var app = express();

// db conn using .env file in development mode
if (process.env.NODE_ENV == 'production') {
  require('dotenv').config()
}
console.log(process.env.NODE_ENV);

mongoose.connect(process.env.DATABASE_URL)
.then((res) => {
    console.log('Connected to MongoDB')
  }
).catch((err) => {
  console.log(err)
});

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');


//this required before view engine setup
hbs.registerPartials(__dirname + '/app_server/views/partials');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/api', routesApi);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
