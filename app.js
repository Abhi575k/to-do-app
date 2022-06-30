var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');


//static files
app.use('/assets', express.static('assets'));

//fire up controller
todoController(app);

//listening to port
app.listen(3000, '127.0.0.1');