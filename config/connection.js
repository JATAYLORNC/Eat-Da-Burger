var mysql = require("mysql");

///loads environment variables from .env file
//.env holds mySQL password
require("dotenv").config();

//establish a connection to mySQL burgers_db
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.password,
  database: "burgers_db"
});

//use the connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

//export the connection for use by ORM.js
module.exports = connection;