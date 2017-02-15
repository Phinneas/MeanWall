var express = require('express');
var path = require('path');
var bp = require('body-parser');
var port = 8000;
var app = express();
var session = require('express-session');

app.use(bp.json());
app.use(express.static(path.join(__dirname + '/client')));
 // app.use(express.static(path.join(__dirname + '/bower_components')));
 app.use(session({
   secret: 'keyboard cat',
   resave: false,
   saveUninitialized: true,
   cookie: { secure: true }
 }))
 require('./server/config/mongoose.js');

require('./server/config/routes.js')(app)
app.listen(port, function(){
    console.log('hello, Buzz!')
})
