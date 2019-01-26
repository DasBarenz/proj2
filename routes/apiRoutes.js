var db = require("../models");

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
    res.render("symptoms", { name: req.body.data });
  });


  app.post("/api/symptoms", function (req, res) {
    // db.UserInfo.findAll({}).then(function (dbUserInfos) {
    res.json(dbUserInfos);

  });



  // Create a new example
  app.post("/api/userdata", function (req, res) {
    db.UserInfo.create(req.body).then(function (dbUserInfos) {
      res.json(dbUserInfos);
    });
  });

  // Delete an example by id
  app.delete("/api/userdata/:id", function (req, res) {
    db.UserInfo.destroy({ where: { id: req.params.id } }).then(function (dbUserInfos) {
      res.json(dbUserInfos);
    });
  });
};
