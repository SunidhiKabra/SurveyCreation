var express = require('express');
var evaluatorRouter = require('./router/evaluatorRouter.js');

var app = express();

app.set('view engine', 'ejs');
app.use('/resources', express.static('resources'));

evaluatorRouter.evaluatorRouter(app);

app.listen(8080, function () {
  console.log('App listening on port 8080!');
});

module.exports = app;
