require('dotenv').config();

const express = require('express');
const hbs = require('express-hbs');

const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//Routes
const cafeAPI = require('./routes/api');
const commentsAPI = require('./routes/api/comments');
const authenticationAPI = require('./routes/api/authentication');

const index = require('./routes/index');
const users = require('./routes/users');
const login = require('./routes/login');

const feed = require('./routes/feed');
const register = require('./routes/register');
const cafe = require('./routes/cafe');
const privacyPolicy = require('./routes/privacy-policy');
const aboutUs = require('./routes/about-us');
const careers = require('./routes/careers');
const search = require('./routes/search');

//Model Classes
const Cafe = require('./models/cafe');

//Use `.hbs` for extensions and find partials in `views/partials`.
const app = express();
app.engine('hbs', hbs.express4({
    partialsDir: `${__dirname}/views/partials`,
    layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: `${__dirname}/views/layouts/layout.hbs`
}));
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

//http://expressjs.com/api.html#app.locals
app.locals.PROD_MODE = (app.get('env') === 'production');

/*
  // original express setup
  var app = express();
  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');
*/

//uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', cafeAPI);
app.use('/api', commentsAPI);       //TODO: Move this to its own api/Section, check mongodb api
app.use('/api', authenticationAPI);

app.use('/', index);
app.use('/users', users);
app.use('/login', login);
app.use('/feed', feed);
app.use('/register', register);
app.use('/cafe', cafe);
app.use('/privacy-policy', privacyPolicy);
app.use('/about-us', aboutUs);
app.use('/careers', careers);
app.use('/search', search);

//catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//error handler
app.use((err, req, res, next) => {
    //set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //render the error page
    res.status(err.status || 500);
    res.render('error');
});

//cache the cafes in the app.locals.cafes
Cafe.find({}, (err, res) => {
    console.log('Cached %d cafe\'s in the app.locals', res.length);
    app.locals.cafes = res;
});

// handlebars helpers
hbs.registerHelper("json", function(object){
    return JSON.stringify(object);
});

module.exports = app;