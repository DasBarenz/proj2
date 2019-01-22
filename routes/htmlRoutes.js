var db = require ('../models');

module.exports = function (app) {
  // Load index page
  app.get ('/', function (req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });
  });

  // Load page that shows symptom information
  app.get ('/symptoms', function (req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });
  });

  // Load page for underage user
  app.get ('/underage', function (req, res) {
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
    //   res.render("example", {
    //     example: dbExample
    //   });
    // });
  });

  // Load page for minimum symptoms
  app.get ('/symptoms/min', function (req, res) {
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
    //   res.render("example", {
    //     example: dbExample
    //   });
    // });
  });

  // Load page for moderate symptoms
  app.get ('/symptoms/mod', function (req, res) {
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
    //   res.render("example", {
    //     example: dbExample
    //   });
    // });
  });

  // Load page for severe symptoms
  app.get ('/symptoms/sev', function (req, res) {
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
    //   res.render("example", {
    //     example: dbExample
    //   });
    // });
  });


  // Render 404 page for any unmatched routes
  app.get ('*', function (req, res) {
    res.render ('404');
  });
};
