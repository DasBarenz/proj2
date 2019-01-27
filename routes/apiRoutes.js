var db = require('../models');

module.exports = function (app) {
  var drugstoreLink = "";
  var severity = "";
  var cureList = [];

  // Get user name and zip code from welcome page and create new user
  app.post("/api/welcome", function (req, res) {
    console.log(req.body.userName, req.body.zipCode);
    var userName = req.body.userName;
    var zipCode = req.body.zipCode;

    db.UserInfo
      .create({
        name: userName,
        zipcode: zipCode,
      })
      .then(function (dbUserInfo) {
        // Get lat and lon from the zipcode
        db.ZipCode.findOne({ where: { zip: zipCode } }).then(function (dbZipCodes) {
          var lat = dbZipCodes.lat;
          var lng = dbZipCodes.lng;
          console.log(lat, lng);

          // TODO call Walgreen API with lat and lng to get URL for nearby stores

          res.json(dbUserInfo);
        });
      });
  });

  // Loads the symptoms page with the user's name
  app.get("/api/user/:username", function (req, res) {
    res.render("symptoms", { name: req.params.username })
  });

  // Loads the results page with the user's data
  app.get("/api/user/:username/results", function (req, res) {

    // TODO expand to include severity, medicine list and Walgreens link

    res.render("results", { name: req.params.username, severity: severity, cureList: cureList, drugstoreLink: drugstoreLink })
  });

  // Get the number of symptoms and add to the database
  app.post('/api/userdata', function (req, res) {
    db.UserInfo
      .update({ score: req.body.score }, { where: { name: req.body.id } })
      .then(function (dbUserInfos) {
        res.json(dbUserInfos);
      });
  });

  // Get all user data
  app.get('/api/userdata', function (req, res) {
    db.UserInfo.findAll({}).then(function (dbUserInfos) {
      res.json(dbUserInfos);
    });
  });

  // Get all zip code data
  app.get('/api/zipcode', function (req, res) {
    db.ZipCode.findAll({}).then(function (dbZipCodes) {
      res.json(dbZipCodes);
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
