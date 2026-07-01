# Project Management Backend Application

A RESTful backend application built using **Node.js**, **Express.js**, and **MongoDB** that enables users to manage projects in a structured and organized way. The application provides secure user authentication and allows users to create, read, update, and delete projects while maintaining user-specific project records.

---

## 📖 Overview

The Project Management Backend Application is designed to simplify project management by providing a centralized system for storing and managing project information. Every project is associated with a user, allowing users to maintain their own collection of projects securely.

This project focuses on building a scalable backend with clean REST APIs, authentication, database integration, and proper validation.

---

## 🎯 Purpose

The primary goal of this project was to strengthen backend development skills by building a complete RESTful API.

The application allows users to:

* Register and log in securely
* Create new projects
* View project details
* Update existing projects
* Delete projects
* Update user information
* Maintain a structured record of users and their projects

---

## 🚀 Features

* 🔐 User Authentication using JWT
* 🔒 Password Hashing with bcrypt
* 👤 User Registration & Login
* 📁 Create Projects
* 📄 Read Projects
* ✏️ Update Projects
* 🗑️ Delete Projects
* 👥 Update User Information
* ✅ Request Validation
* 🍪 Cookie-based Authentication Support
* 🌐 CORS Enabled
* 📧 Email Support using Nodemailer

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication & Security

* JSON Web Token (JWT)
* bcrypt
* cookie-parser

### Validation

* express-validator

### Email Services

* Nodemailer
* Mailgen

### Other Tools

* Git
* Postman
* Nodemon
* dotenv
* CORS

---

## 📦 Dependencies

```json
{
  "bcrypt": "^6.0.0",
  "cookie-parser": "^1.4.7",
  "cors": "^2.8.6",
  "dotenv": "^17.4.2",
  "express": "^5.2.1",
  "express-validator": "^7.3.2",
  "jsonwebtoken": "^9.0.3",
  "mailgen": "^2.0.34",
  "mongoose": "^9.6.3",
  "nodemailer": "^8.0.10",
  "nodemon": "^3.1.14"
}
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Navigate to the project directory

```bash
cd project-management-backend
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

Add your environment variables.

Example:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

JWT_EXPIRY=7d

EMAIL_USER=your_email

EMAIL_PASS=your_email_password
```

### Start the development server

```bash
npm run dev
```

or

```bash
npm start
```

---

## 📌 API Capabilities

### Authentication

* User Registration
* User Login
* JWT Authentication

### User

* Get User Details
* Update User Information

### Project

* Create Project
* Get Project(s)
* Update Project
* Delete Project

---

## 📁 Project Structure

```
project-management-backend/
│
├── controllers/
├── models/
├── routes/
├── middlewares/
├── validators/
├── utils/
├── config/
├── public/
├── .env
├── package.json
├── server.js
└── README.md
```

> Update the folder structure above if your project differs.

---

## 🧪 Testing

API endpoints were tested using **Postman**.

---

## 🔮 Future Improvements

* Project member management
* Project deadlines
* Task management
* Role-based access control
* Project categories
* Search and filtering
* File uploads
* Notifications
* Unit and integration testing
* Docker support
* CI/CD pipeline

---

## 📚 Learning Outcomes

This project helped me gain practical experience with:

* REST API development
* Express.js architecture
* MongoDB data modeling
* Mongoose relationships
* JWT authentication
* Password hashing
* Input validation
* Environment variable management
* Git version control
* API testing with Postman

---

## 👨‍💻 Author

**Saipreety Sutar**

GitHub: https://github.com/your-github-saipreetysutar123
