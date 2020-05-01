module.exports = {
	PORT: 3000,
	SESSION: {
		secret: 'JAVASCRIPT',
		saveUninitialized: false,
		resave: false,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 30,
		},
	},
	SQL: {
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'excel',
	},
};