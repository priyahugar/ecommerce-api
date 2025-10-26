// src/routes/categoryRoutes.js
import express from "express";
import Category from "../models/Category.js";
import { authenticate, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a new category (admin only)
router.post("/", authenticate, authorize(["admin"]), async (req, res) => {
  try {
    const { name, description } = req.body;
    const slug = name.toLowerCase().replace(/\s+/g, "-");

    const category = await Category.create({ name, description, slug });
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update category (admin only)
router.put("/:id", authenticate, authorize(["admin"]), async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });

    const { name, description } = req.body;
    const slug = name.toLowerCase().replace(/\s+/g, "-");

    await category.update({ name, description, slug });
    res.json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete category (admin only)
router.delete("/:id", authenticate, authorize(["admin"]), async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });

    await category.destroy();
    res.json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;