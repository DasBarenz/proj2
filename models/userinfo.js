module.exports = function (sequelize, DataTypes) {
  var UserInfo = sequelize.define ('UserInfo', {
    name: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    score: DataTypes.INTEGER,
  });
  return UserInfo;
};