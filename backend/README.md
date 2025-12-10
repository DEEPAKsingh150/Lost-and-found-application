# Lost & Found Backend API

Backend API for the Lost and Found application built with Node.js, Express, and MongoDB.

## Features

- ✅ RESTful API Architecture
- ✅ User Authentication (JWT)
- ✅ Password Hashing (bcrypt)
- ✅ MongoDB Database
- ✅ Input Validation
- ✅ Protected Routes
- ✅ CORS Enabled

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **express-validator** - Input validation
- **cors** - Cross-origin resource sharing

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Configure environment variables:**

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/lost-and-found
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
```

3. **Start MongoDB:**
```bash
mongod
# Or use MongoDB Atlas connection string
```

4. **Run the server:**

Development mode (with nodemon):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The API will be available at: `http://localhost:5000`

## API Endpoints

### Authentication Routes
