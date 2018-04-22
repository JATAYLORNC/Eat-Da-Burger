var mysql = require("mysql");

///loads environment variables from .env file
//.env holds access keys for twitter and spotify APIs
require("dotenv").config();

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.password,
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;