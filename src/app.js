// src/app.js
import express from "express";
import sequelize from "./config/db.js";
import User from "./models/User.js";
import Category from "./models/Category.js";
import Product from "./models/Product.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
app.use(express.json());

const PORT = 3000;

// Test route
app.get("/", (req, res) => {
  res.send("Ecommerce API is running ✅");
});

// Use routes
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

// Sync database and start server
sequelize.sync({ alter: true }).then(() => {
  console.log("Models synced ✅");
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});