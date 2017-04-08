const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
	name: {type: String},
	Questions: {
		QuestionName1: {type: String},
		Answer1: {type: String},
		Answer2: {type: String},
		CorrectAnswer: {type: String}
	}
});

QuizSchema.methods.apiRepr = function(){
	return{
		name: this.name,
		Questions: {
			QuestionsName1: this.QuestionName1,
			Answer1: this.Answer1,
			Answer2: this.Answer2,
			CorreectAnswer: this.CorrectAnswer
		}
	};
};


const Quiz = mongoose.model('Quiz', QuizSchema);

module.exports = Quiz;