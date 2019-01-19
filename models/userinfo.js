module.exports = function (sequelize, DataTypes) {
  var UserInfo = sequelize.define ('UserInfo', {
    name: DataTypes.STRING,
    zipcode: DataTypes.TINYINT,
    score: DataTypes.TINYINT,
  });
  return UserInfo;
};