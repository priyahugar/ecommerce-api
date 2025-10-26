# E-Commerce API

## Project Overview
This is a RESTful API for managing products and categories with authentication and role-based access control.  
Users can register, login, and manage categories and products depending on their role (Admin/Seller/User).

## Technology Stack
- Node.js, Express.js
- MongoDB, Mongoose
- JWT Authentication

## Features
- User registration, login, logout (JWT)  
- Category CRUD (Admin only)  
- Product CRUD (Seller/Admin)  
- Role-based access control

## API Endpoints

### Authentication
- *POST* /api/auth/register – Register a new user  
- *POST* /api/auth/login – Login user  
- *POST* /api/auth/logout – Logout user  

### Categories
- *GET* /api/categories – List all categories  
- *POST* /api/categories – Create category (Admin only)  
- *PUT* /api/categories/:id – Update category (Admin only)  
- *DELETE* /api/categories/:id – Delete category (Admin only)  

### Products
- *GET* /api/products – List all products  
- *GET* /api/products/:id – Get single product  
- *POST* /api/products – Create product (Seller/Admin only)  
- *PUT* /api/products/:id – Update product (Seller/Admin only)  
- *DELETE* /api/products/:id – Delete product (Seller/Admin only)  

## Notes
- Users’ permissions depend on their role.  
- JWT tokens are used for authentication.
