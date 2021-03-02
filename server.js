var express = require("express");
var mysql = require("mysql");
module.exports = {
  sayHello: function () {
    return "hello";
  },
};
var bodyParser = require("body-parser");
//Status codes defined in external file
require("./http_status.js");
//use the application off of express.
var app = express();
app.use(express.json());
//define the route for "/"
app.get("/", function (request, response) {
  //show this file when the "/" is requested
  response.sendFile(__dirname + "/index.html");
});
app.use("/", express.static(__dirname + "/"));

//establish DB connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "scraper",
  debug: false,
});

// routes

app.get("/api", (request, response) => {
  response.json(returnSearch);
});
app.post("/api", (request, response) => {
  console.log(request.body);
  let search = request.body.searchValue;
  con.query(
    "SELECT * FROM games WHERE productName LIKE '%" + search + "%'",
    function (err, result) {
      if (err) throw err;
      else {
        response.json(result);
      }
    }
  );
});
//start the server
app.listen(8080);

console.log("Server running at: http://localhost:8080");
