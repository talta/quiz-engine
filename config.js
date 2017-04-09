

exports.DATABASE_URL = (process.env.DATABASE_URL ||
						global.DATABASE_URL ||
						'mongodb://tatest:Password1234@ds149278.mlab.com:49278/quiz-engine'
						);

exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||
						'mongodb://localhost/quiz-engine-test';
						// 'mongodb://tatest:Password1234@ds149278.mlab.com:49278/quiz-engine'
						


exports.PORT = process.env.PORT || 8080