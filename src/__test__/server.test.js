////external dependencies:
const chai =require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const should = chai.should();


///internal dependencies:
const Quiz = require('../../models');
const {runServer, app, closeServer} = require('../../server');
const {DATABASE_URL, TEST_DATABASE_URL} = require('../../config');


// import {runServer, seedQuizzesData, closeServer, tearDownDb} from './test.server';

chai.use(chaiHttp);


function seedQuizzesData(){
	console.log('seeding the database');
	const seedData = [];
	for(let i=0; i<=10; i++){
		seedData.push(generateQuizzesData());
	};
	return Quiz.insertMany(seedData);
};

function generateQuizNames(){
	const quizNames = ['quiz1', 'quiz2', 'quiz3', 'quiz4'];
	return quizNames[Math.floor(Math.random()*quizNames.length)];
};

function generateQuizQuestions(){
	const quizQuestions = ['what is your favorite drink', 'what is your favorite color', 'what is your mom\'s name', 'What day is it today?'];
	return quizQuestions[Math.floor(Math.random()*quizQuestions.length)];
};

function generateQuizAnswers(){
	const quizAnswers = ['Blue', 'Caramel', 'GoldenRod', 'Princepesa'];
	return quizAnswers[Math.floor(Math.random()*quizAnswers.length)];
};

function generateQuizCorrectAnswers(){
	const correctAnswers = ['this name', 'that name', 'this noun', 'that noun'];
	return correctAnswers[Math.floor(Math.random()*correctAnswers.length)];
};

function generateQuizzesData(){
	return {
		name: generateQuizNames(),
		Questions: {
			QuestionName1: generateQuizQuestions(),
			Answer1: generateQuizAnswers(),
			Answer2: generateQuizAnswers(),
			correctAnswers: generateQuizCorrectAnswers()
		}
	}
}



function tearDownDb(){
	console.warn('deleting database');
	return mongoose.connection.dropDatabase();
};



describe('Quiz', function(){
	beforeEach(function(){
		runServer(TEST_DATABASE_URL);
		console.log('server running');
		// return seedQuizzesData();
	});
	afterEach(function(){
		closeServer();
		console.log('closed the DB');
		// return closeServer();
	});


	describe('smoke test on node', function(){
		//res was undefined
		it('should reach teh database and return anything', function(){
			let res;
			return chai.request(app)
				.get('/SmokeTest')
				.then(_res=>{
					res = _res;
					res.should.have.status(200);
					// res.should.not.be('');
				});
		});
		console.log('smoke test executed');
	// 	it('should serve an html page whenever a route is reached', function(){
	// 		// console.log(chai, 'chai here');
	// 		return chai.request(app)
	// 		.get('/')
	// 		.expect('Content-Type', /html/)
	// 		.expect(200)
	// 		.then(res => expect(res.text).to.contain('<div id="root"></div>'));
	// 	});
	});
});






module.exports = {runServer, seedQuizzesData, closeServer, tearDownDb};

