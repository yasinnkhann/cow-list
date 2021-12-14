const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'cowlist2'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!


// Don't forget to export your functions!
module.exports = {
  // db: connection,
  getAll: function(cb) {
    connection.query('SELECT * FROM cows2;', (err, data) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, data);
      }
    })
  },
  create: function(cowDetails, cb) {
    const name = cowDetails.name;
    const description = cowDetails.description;

    connection.query('INSERT INTO cows2 (name, description) VALUES (?, ?);', [name, description], (err, data) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, data);
      }
    })
  }
};
