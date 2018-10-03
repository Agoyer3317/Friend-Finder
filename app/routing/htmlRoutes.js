//made constructor without name, use file name as the name for it, without really naming the constructor
var path = require('path');

module.exports = function(app){

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
};