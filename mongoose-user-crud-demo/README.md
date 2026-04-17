# MongoDB + Mongoose User CRUD Demo

This is a complete demo project for **Module 11 / Day 11** and **Module 12 / Day 12** using:
- Node.js
- Express.js
- MongoDB
- Mongoose

It follows a clean structure:

```bash
Route -> Controller -> Service -> DB(Model)
```

---

## 1. What you will learn

### MongoDB
MongoDB is a NoSQL database that stores data in flexible JSON-like documents.

### Mongoose
Mongoose is an ODM (Object Data Modeling) library for MongoDB in Node.js. It helps you:
- define schema
- create models
- validate data
- run CRUD queries easily

---

## 2. Main concepts

### Schema
A **Schema** defines the structure of the document.

Example:
- firstName
- lastName
- email
- phone
- role
- addresses

### Model
A **Model** is created from a schema and is used to interact with MongoDB.

Example:
```js
const User = mongoose.model('User', userSchema);
```

### CRUD
CRUD means:
- **Create** -> insert new data
- **Read** -> get data
- **Update** -> modify data
- **Delete** -> remove data

---

## 3. Project features

- Express server setup
- MongoDB connection using Mongoose
- `.env` configuration
- User CRUD APIs
- `role` enum: `user`, `super_admin`
- unique `email` and `phone`
- multiple addresses for each user
- soft delete and restore
- hard delete
- common success response handler
- centralized error handling
- request validation using `express-validator`
- proper HTTP status codes

---

## 4. Folder structure

```bash
mongoose-user-crud-demo/
│── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── user.controller.js
│   ├── middlewares/
│   │   ├── errorHandler.middleware.js
│   │   └── notFound.middleware.js
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   └── user.routes.js
│   ├── services/
│   │   └── user.service.js
│   ├── utils/
│   │   ├── apiResponse.js
│   │   ├── ApiError.js
│   │   └── asyncHandler.js
│   ├── validators/
│   │   └── user.validator.js
│   └── app.js
│── postman/
│   └── Mongoose-User-CRUD-Demo.postman_collection.json
│── .env.example
│── package.json
│── server.js
│── README.md
```

---

## 5. Setup instructions

### Step 1: Install packages

```bash
npm install
```

### Step 2: Create `.env`

Copy `.env.example` into `.env`:

```bash
cp .env.example .env
```

Example `.env`:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/mongoose_user_crud_demo
NODE_ENV=development
```

If you are using MongoDB Atlas:

```env
PORT=5000
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/mongoose_user_crud_demo?retryWrites=true&w=majority
NODE_ENV=development
```

### Step 3: Start server

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

---

## 6. How DB connection works

In `server.js`, we load environment variables and connect to MongoDB before starting the Express server.

```js
require('dotenv').config();

const app = require('./src/app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();
```

---

## 7. Important Mongoose queries

### Create
```js
await User.create(data);
```

### Find all
```js
await User.find({ isDeleted: false });
```

### Find by id
```js
await User.findById(id);
```

### Find one
```js
await User.findOne({ email: 'john@example.com' });
```

### Update fully
```js
await User.findOneAndUpdate({ _id: id }, payload, { new: true, runValidators: true });
```

### Partial update
```js
await User.findOneAndUpdate({ _id: id }, { $set: payload }, { new: true, runValidators: true });
```

### Soft delete
```js
await User.findOneAndUpdate(
  { _id: id },
  { isDeleted: true, deletedAt: new Date() },
  { new: true }
);
```

### Hard delete
```js
await User.findByIdAndDelete(id);
```

---

## 8. API endpoints

### Create user
```http
POST /api/users
```

### Get all users
```http
GET /api/users
```

Optional query params:
- `role=user`
- `search=john`
- `includeDeleted=true`

### Get single user
```http
GET /api/users/:id
```

### Full update user
```http
PUT /api/users/:id
```

### Partial update user
```http
PATCH /api/users/:id
```

### Soft delete user
```http
PATCH /api/users/:id/soft-delete
```

### Restore user
```http
PATCH /api/users/:id/restore
```

### Permanent delete user
```http
DELETE /api/users/:id
```

---

## 9. Sample request body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "age": 28,
  "role": "user",
  "addresses": [
    {
      "type": "home",
      "line1": "221B Baker Street",
      "city": "London",
      "state": "Greater London",
      "country": "UK",
      "postalCode": "NW1",
      "isDefault": true
    },
    {
      "type": "office",
      "line1": "10 Downing Street",
      "city": "London",
      "state": "London",
      "country": "UK",
      "postalCode": "SW1A 2AA",
      "isDefault": false
    }
  ]
}
```

---

## 10. HTTP status codes used

- `200` -> success
- `201` -> created successfully
- `400` -> bad request / invalid id
- `404` -> resource not found
- `409` -> duplicate email or phone
- `422` -> validation failed
- `500` -> internal server error

---

## 11. Common response format

### Success
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {}
}
```

### Error
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": []
}
```

---

## 12. Soft delete explanation

Soft delete does not remove data from MongoDB physically.
It only marks the record as deleted:

```js
isDeleted: true,
deletedAt: new Date()
```

This is useful because:
- you can restore data later
- you keep audit history
- accidental deletion is safer

---

## 13. Practice tasks for you

1. Run the project with local MongoDB.
2. Create 3 users using Postman.
3. Test duplicate email and duplicate phone.
4. Soft delete one user.
5. Restore that user.
6. Filter users by `role=super_admin`.
7. Search users by name using `search=`.
8. Try invalid Mongo ID and validation errors.

---

## 14. Notes

- This project is beginner-friendly.
- It is suitable for understanding Mongoose schema, model, and CRUD flow.
- You can later extend it with authentication, pagination, JWT, and advanced filtering.

