var db = require("../models");

module.exports = function(app) {

  // Get all user data
  app.get("/api/userdata", function(req, res) {
    db.UserInfo.findAll({}).then(function(dbUserInfos) {
      res.json(dbUserInfos);
    });
  });

  // Create a new example
  app.post("/api/userdata", function(req, res) {
    db.UserInfo.create(req.body).then(function(dbUserInfos) {
      res.json(dbUserInfos);
    });
  });

  // Delete an example by id
  app.delete("/api/userdata/:id", function(req, res) {
    db.UserInfo.destroy({ where: { id: req.params.id } }).then(function(dbUserInfos) {
      res.json(dbUserInfos);
    });
  });
};
