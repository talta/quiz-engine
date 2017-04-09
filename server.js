
////external dependencies:
const express = require('express');
const mongoose = require('mongoose');

///local dependencies:
const {PORT, DATABASE_URL, TEST_DATABASE_URL} = require('./config');

///app instantiation:
const app = express();
mongoose.Promise = global.Promise;
app.use(express.static('public'));



///in order to correct the error from the key and value hash:
// var cache = {};

///routes:
app.get('/welcome', (req, res)=>{
	console.log('reached the welcome page');
	/////this should be the real quiz, after confirmed testing:
	TestQuiz
	.findOne()
		console.log('records found')
	.exec()
		console.log('request executed')
	.then(quiz=>{
		res.json(quiz.map(quiz=>quiz.apiRepr()))
	})
		console.log('then block executed')
	.catch(err=>{
		console.log(err);
		res.status(500).json({error:'Oops, something went wrong.'});
	});
		console.log('catch executed')
});


app.get('/smokeTest', (req, res)=>{
	setup
	.find()
	.exec()
	.then(smokeTest=>{
		res.json(setup.map(setup =>setup.apiRepr()));
	})
	.catch(err=>{
		console.log(err);
		res.status(500).json({message: 'something wrong happened'});
	});
});


let server;

function runServer(databaseUrl = DATABASE_URL, port=PORT){
	return new Promise((resolve, reject)=>{
		mongoose.connect(databaseUrl, err =>{
			if(err){
				return reject(err);
			}
			server = app.listen(port, () =>{
				console.log(`your app is listening on post ${port}`);
				resolve();
			})
			.on('error', err =>{
				mongoose.disconnect();
				reject(err);
			});
		});
	});
};


function closeServer() {
	console.log('closing the server from server.js');
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

if(require.main === module){
	runServer().catch(err => console.error(err));
};

module.exports = {runServer, app, closeServer};