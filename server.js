var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

// takes me from URL encoded data, puts it in JS
app.use(bodyParser.urlencoded({ extended: true }));
//parses the JSON
app.use(bodyParser.json());


//imports api route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//makes listening for server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
/**
 * After adding and committing changes 
 * to upload to heroku
 * `git push heroku master`
 * 
 * To create a new heroku app for new homeworks
 * `heroku create` in that homework's directory
 * Then `git push heroku master`
 */