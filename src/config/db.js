// src/config/db.js
import { Sequelize } from "sequelize";

// Create Sequelize instance
const sequelize = new Sequelize("ecommerce_friend_db", "root", "Thiru@1975", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

// Test database connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected ✅"))
  .catch((err) => console.error("Database connection failed ❌", err));

export default sequelize;