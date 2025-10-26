// src/routes/productRoutes.js
import express from "express";
import Product from "../models/Product.js";
import Category from "../models/Category.js";
import { authenticate, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create product (admin only)
router.post("/", authenticate, authorize(["admin"]), async (req, res) => {
  try {
    const { name, description, price, categoryId } = req.body;
    const product = await Product.create({ name, description, price, categoryId });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({ include: Category });
    res.json(products);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update product (admin only)
router.put("/:id", authenticate, authorize(["admin"]), async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const { name, description, price, categoryId } = req.body;
    await product.update({ name, description, price, categoryId });
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete product (admin only)
router.delete("/:id", authenticate, authorize(["admin"]), async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.destroy();
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;