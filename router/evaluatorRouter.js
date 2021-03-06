var evaluatorController = require('../controllers/evaluatorController');

module.exports.evaluatorRouter = function(app){

  app.get('/', function(req, res, next){
    res.render('index');
  });

  app.get('/create-qr-code-for-evaluator', function(req, res, next){
    res.render('createQRCodeForEvaluator');
  });

  app.get('/create-qr-code-for-team', function(req, res, next){
    res.render('createQRCodeForTeam');
  });

  app.get('/create-survey', function(req, res, next){
    res.render('createSurvey');
  });

  app.post('/submit-form', function(req, res){
    // console.log(req.body);
    evaluatorController.surveyFormCreation(req, res);
  });


  app.get('/test', function(req, res, next){
    res.render('test');
  });
};
