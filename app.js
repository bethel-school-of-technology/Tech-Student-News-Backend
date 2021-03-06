var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var favoritesRouter = require('./routes/favorites');
var projectsRouter = require('./routes/projects');
var eventsRouter = require('./routes/events');
var suggestionsRouter = require('./routes/suggestion');
var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');



var app = express();

// Setting up Mongoose Connection
var mongoose = require ('mongoose');
const morgan = require('morgan');
var mongoDB = 'mongodb+srv://dbuser:Password1!@cluster0.0xruf.mongodb.net/Tech-Student-News?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on("connected", () => console.log(`Mongoose connection open to ${mongoDB}`));
db.on("disconnected", () => console.log("Mongoose connection disconnected"));
db.on("error", console.error.bind(console, "Mongoose connection error:"));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());//{ origin: "http://localhost:4200", credentials: true }));
app.use(bodyParser.json());



app.use('/favorites',favoritesRouter);
app.use('/projects',projectsRouter);
app.use('/event',eventsRouter);
app.use('/suggestion',suggestionsRouter);
app.use('/', indexRouter);
//app.use('/user', usersRouter);



//var mongoDB = "mongodb://127.0.0.1/database";
//mongoose.connect(mongoDB, {  useNewUrlParser: true });
//mongoose.Promise = global.Promise;
//var db = mongoose.connection;
//db.on("connected", () => console.log(`Mongoose connection open to ${mongoDB}`));
//db.on("disconnected", () => console.log("Mongoose connection disconnected"));
//db.on("error", console.error.bind(console, "Mongoose connection error:"));



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
