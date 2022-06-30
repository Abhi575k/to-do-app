var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();
var port=parseInt(process.argv[2])?parseInt(process.argv[2]):3000;

//set up template engine
app.set('view engine', 'ejs');


//static files
app.use('/assets', express.static('assets'));

//fire up controller
todoController(app);

//listening to port
app.listen(port, '127.0.0.1');