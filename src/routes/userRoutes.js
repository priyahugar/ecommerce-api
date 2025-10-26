// src/routes/userRoutes.js
import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { authenticate, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// Register new user
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await User.create({ name, email, password, role });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Login user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, "secretkey", { expiresIn: "1h" });
    res.json({ token, user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all users (admin only)
router.get("/", authenticate, authorize(["admin"]), async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

export default router;