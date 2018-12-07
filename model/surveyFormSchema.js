var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var surveyFormSchema = new Schema({
    questionId: Schema.Types.ObjectId,
    questionText: {
        type: String,
        required: 'Kindly enter the question'
    }
  }, {collection: 'survey'});

module.exports = mongoose.model('SurveyForm', surveyFormSchema);
