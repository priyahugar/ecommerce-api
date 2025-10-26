// src/models/Product.js
import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Category from "./Category.js";

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    unique: true,
  },
});

// Association
Product.belongsTo(Category, { foreignKey: "categoryId" });
Category.hasMany(Product, { foreignKey: "categoryId" });

export default Product;