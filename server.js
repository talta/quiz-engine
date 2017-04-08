
////external dependencies:
const express = require('express');
const mongoose = require('mongoose');

///local dependencies:
const {PORT, DATABASE_URL, TEST_DATABASE_URL} = require('./config');

///app instantiation:
const app = express();
mongoose.Promise = global.Promise;
app.use(express.static('public'));




///routes:
app.get("/welcome", (req, res)=>{
	console.log('reached the welcome page');

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

function closeServer(){
	return mongoose.disconnect().then(()=>{
		return new Promise((resolve, reject)=>{
			server.close(err=>{
				if(err){
					return reject(err);
				}
				resolve();
			});
		});
	});
};

if(require.main ==== module){
	runServer().catch(err => console.error(err));
};

module.exports = {runServer, app, closeServer};