

exports.DATABASE_URL = (process.env.DATABASE_URL ||
						global.DATABASE_URL ||
						'mongodb://localhost/quiz-engine'
						);

exports.TEST_DATABASE_URL = (process.env.TEST_DATABASE_URL ||
						'mongodb://localhost/quiz-engine-test'
						);


exports.PORT = process.env.PORT || 8080