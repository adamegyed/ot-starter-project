import {
  Model
} from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    id: DataTypes.BIGINT,
    name: DataTypes.TEXT,
    price: DataTypes.BIGINT,
    quantity: DataTypes.BIGINT,
    vendor_name: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};