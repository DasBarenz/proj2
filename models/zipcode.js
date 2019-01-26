module.exports = function (sequelize, DataTypes) {
    var ZipCode = sequelize.define ('ZipCode', {
      zip: {
        type: DataTypes.STRING,
        validate: {
          len: [5,5],
        }
      },
      lat: {
        type: DataTypes.STRING,
      },
      lng: {
        type: DataTypes.STRING,
      }
    });
    return ZipCode;
  };

  