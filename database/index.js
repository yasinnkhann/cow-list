const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'cowlist',
});

connection.connect(err => {
	if (err) {
		console.log(err);
	} else {
		console.log('Connected to MySQL!');
	}
});

// Your Database Queries Here!!

// Don't forget to export your functions!
module.exports = {
	getAllCows: function (cb) {
		const queryStr = 'SELECT * FROM cows;';
		connection.query(queryStr, (err, data) => {
			if (err) {
				cb(err, null);
			} else {
				cb(null, data);
			}
		});
	},

	createCow: function (cowDetails, cb) {
		const name = cowDetails.name;
		const description = cowDetails.description;
		const queryStr = 'INSERT INTO cows (name, description) VALUES (?, ?);';

		connection.query(queryStr, [name, description], (err, data) => {
			if (err) {
				cb(err, null);
			} else {
				cb(null, data);
			}
		});
	},

	updateCow: function (id, cowToUpdate, cb) {
		const queryStr = 'UPDATE cows SET name = ?, description = ? WHERE id = ?;';
		const name = cowToUpdate.name;
		const description = cowToUpdate.description;
		connection.query(queryStr, [name, description, id], (err, data) => {
			if (err) {
				cb(err, null);
			} else {
				cb(null, data);
			}
		});
	},

	deleteCow: function (id, cb) {
		const queryStr = 'DELETE FROM cows WHERE id = ?;';
		connection.query(queryStr, id, (err, data) => {
			if (err) {
				cb(err, null);
			} else {
				cb(null, data);
			}
		});
	},
};
