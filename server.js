var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var router = require("./controllers/burgers_controller")

var app = express();
var port = process.env.port || 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(router);

app.listen(port, function() {
  console.log("listening on port", port);
});