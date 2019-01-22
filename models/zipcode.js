module.exports = function (sequelize, DataTypes) {
    var Zip = sequelize.define ('ZipCode', {
      zip: DataTypes.TINYINT,
      lat: DataTypes.DECIMAL,
      lng: DataTypes.DECIMAL,
    });
    return Zip;
  };