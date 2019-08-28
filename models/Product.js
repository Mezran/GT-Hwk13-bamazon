module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define("Product", {
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    departmentName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },
    stockQuantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  return Product;
}
