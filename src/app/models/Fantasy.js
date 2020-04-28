module.exports = (sequelize, DataTypes) => {
  const Fantasy = sequelize.define("Fantasy", {
    title: DataTypes.STRING,
    price: DataTypes.FLOAT,
    promotional_price: DataTypes.FLOAT,
    size: DataTypes.STRING(3),
    description: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  return Fantasy;
};
