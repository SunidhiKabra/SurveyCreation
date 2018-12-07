var express = require('express');
var evaluatorRouter = require('./router/evaluatorRouter.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var session = require('express-session');


var app = express();

mongoose.connect("mongodb://localhost/easyEvaluation");

app.set('view engine', 'ejs');
app.use('/resources', express.static('resources'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


evaluatorRouter.evaluatorRouter(app);

mongoose.connection.once('open', function(){
  console.log('Connectione made');
}).on('error', function(error){
  console.log('COnnection error, ', error);
});

app.listen(8080, function () {
  console.log('App listening on port 8080!');
});

module.exports = app;
