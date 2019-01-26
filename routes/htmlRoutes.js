//var db = require ('../models');
var path = require ("path");

module.exports = function (app) {
  // Load index page
  app.get ('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  });

  // Load page that shows symptom information
  app.get ('/symptoms', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });


  // Load page for the results
  app.get ('/results', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/results.html"));
  });

  // Render 404 page for any unmatched routes
  app.get ('*', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });
};
