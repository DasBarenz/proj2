var db = require('../models');

module.exports = function (app) {

  // Get all user data
  // app.get("/", function (req, res) {
  //   // db.UserInfo.findAll({}).then(function (dbUserInfos) {
  //   console.log(req.body.inputName);
  //   res.render("symptoms.html");
  // });

  app.post("/api/welcome", function (req, res) {
    // db.UserInfo.findAll({}).then(function (dbUserInfos) {
    console.log(req.body.data);
    var userInput = req.body.data;
    res.json(userInput);
  });

  app.get("/api/user/:username", function (req, res) {
    res.render("symptoms", { name: req.params.username })
  });


  // Get all user data
  app.get('/api/userdata', function (req, res) {
    db.UserInfo.findAll({}).then(function (dbUserInfos) {
      res.json(dbUserInfos);
    });
  });

  // Get all user data
  app.get('/api/zipcode', function (req, res) {
    db.ZipCode.findAll({}).then(function (dbZipCodes) {
      res.json(dbZipCodes);
    });
  });



  app.post("/api/symptoms", function (req, res) {
    // db.UserInfo.findAll({}).then(function (dbUserInfos) {
    res.json(dbUserInfos);

  });



  // Create a new example
  app.post('/api/userdata', function (req, res) {
    db.UserInfo
      .create({
        name: req.body.name,
        zipcode: req.body.zipcode,
      })
      .then(function (dbUserInfos) {
        res.json(dbUserInfos);
      });
  });

  app.post('/api/userdata', function (req, res) {
    db.UserInfo
      .update({ score: req.body.score }, { where: { id: req.body.id } })
      .then(function (dbUserInfos) {
        res.json(dbUserInfos);
      });
  });

  // Delete an example by id
  app.delete('/api/userdata/:id', function (req, res) {
    db.UserInfo
      .destroy({ where: { id: req.params.id } })
      .then(function (dbUserInfos) {
        res.json(dbUserInfos);
      });
  });
};
