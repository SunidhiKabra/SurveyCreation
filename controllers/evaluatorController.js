var mongoose = require('mongoose');
var SurveyForm = require('../model/surveyFormSchema');

exports.surveyFormCreation= function(req, res){
  // console.log(req.body);
  var survey = new SurveyForm({
      questionText: req.body.question,
    });
    survey.save(function (err){
      if(err){
          console.log('There was an error! '+ err);
          res.redirect('/');
      } else{
          // req.session.arrayList = ;
          res.redirect('/');
      }
    });
};
