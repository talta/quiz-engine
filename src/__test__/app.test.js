

////external dependencies:
import React from 'react';
import ReactDOM from 'react-dom';

const {chai, expect} =require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const should = chai.should();
const app = require('../../server');

///internal dependencies:
import App from '../App';
import {runServer, seedQuizzesData, closeServer, tearDownDb} from './test-server';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});




describe('Quiz', function(){
	// before(function(){
	// 	runServer(TEST_DATABASE_URL);
	// 	return seedQuizzesData();
	// });
	// after(function(){
	// 	tearDownDb();
	// 	return closeServer();
	// });

	describe('smoke test on node', function(){
		////res was undefined
		// it('should reach teh database and return anything', function(){
		// 	let res;
		// 	return chai.request(app)
		// 	.get('/Welcome')
		// 	.then(_res=>{
		// 		res = _res;
		// 		res.should.have.status(200);
		// 		res.should.not.be('');
		// 	});
		// });
		it('should serve an html page whenever a route is reached', function(){
			return request(app)
			.get('/')
			.expect('Content-Type', /html/)
			.expect(200)
			.then(res => expect(res.text).to.contain('<div id="root"></div>'));
		});
	});
});