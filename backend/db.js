
//---Dtatabase Connection
const mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "logindata"
});

module.exports = db;