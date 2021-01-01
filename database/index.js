const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "3327",
  database: "cowssql",
});

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log(`connected to database!`);
  }
});

module.exports = connection;
