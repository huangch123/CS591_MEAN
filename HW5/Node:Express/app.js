const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const hw4Router = require('./routes/hw4');
const authRouter = require('./routes/auth');
const User = require('./db/user.js')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hw4', hw4Router);
app.use('/auth', authRouter);

mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true}, ()=>{console.log('mongodb connected')});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  })
});

passport.use(new GoogleStrategy({
    clientID: 'GOOGLE_CLIENT_ID',               // change this to your client id
    clientSecret: 'GOOGLE_CLIENT_SECRET',       // change this to your client secret
    callbackURL: '/auth/google/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({googleID: profile.id}).then((currentUser) => {
      if (currentUser) {
        console.log('User is: ' + currentUser);
        done(null, currentUser);
      } else {
        new User({
          id: profile.id,
          name: profile.displayName
        }).save().then((newUser) => {
          console.log('new user: ' + newUser);
        })
      }
    })
  }
));

app.use(passport.initialize());
app.use(passport.session());

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
