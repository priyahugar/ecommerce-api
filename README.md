# E-Commerce API

A RESTful API for managing products and categories with authentication and role-based access control.

## Features
- User registration, login, logout (JWT)
- Category CRUD (Admin only)
- Product CRUD (Seller/Admin)
- Role-based access control

## Tech Stack
- Node.js, Express.js
- MongoDB, Mongoose
- JWT authentication

## API Endpoints
- POST /api/auth/register – Register user
- POST /api/auth/login – Login user
- POST /api/auth/logout – Logout user
- GET /api/categories – List categories
- POST /api/categories – Create category (Admin)
- PUT /api/categories/:id – Update category (Admin)
- DELETE /api/categories/:id – Delete category (Admin)
- GET /api/products – List products
- GET /api/products/:id – Get single product
- POST /api/products – Create product (Seller/Admin)
- PUT /api/products/:id – Update product (Seller/Admin)
- DELETE /api/products/:id – Delete product (Seller/Admin)
