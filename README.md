DevHub Backend

Backend API for DevHub, a developer platform where users can register and log in securely.
Built using Node.js, Express.js, and MongoDB while learning backend development.

🚀 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

bcryptjs (password hashing)

jsonwebtoken (JWT authentication)

Postman (API testing)

📌 Features
Authentication

User registration

Password hashing using bcrypt

User login

JWT token generation

Backend Setup

Express server setup

MongoDB connection using Mongoose

Environment variables with dotenv

REST API structure

📂 Project Structure
devhub-backend
│
├── config
│   └── db.js
│
├── controllers
│   └── authController.js
│
├── models
│   └── User.js
│
├── routes
│   └── authRoutes.js
│
├── middleware
│
├── server.js
├── package.json
└── README.md
🔗 API Endpoints
Register User
POST /api/auth/register

Example request:

{
  "name": "Awaiz",
  "email": "awaiz@email.com",
  "password": "123456"
}
Login User
POST /api/auth/login

Example request:

{
  "email": "awaiz@email.com",
  "password": "123456"
}

Example response:

{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
⚙️ Installation

Clone the repository

git clone https://github.com/YOUR_USERNAME/devhub-backend.git

Install dependencies

npm install

Create .env file

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/devhub
JWT_SECRET=your_secret_key

Run the server

npm run dev
🔮 Future Improvements

Create posts

Like system

Comment system

User profiles

Follow developers

👨‍💻 Author

Mohammad Awaiz
