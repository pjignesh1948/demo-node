const express = require("express");
const loggerMiddleware = require("./middlewares/logger.middleware");
const authMiddleware = require("./middlewares/auth.middleware");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(loggerMiddleware);


app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to Express Middleware Demo Project",
  });
});



app.get("/dashboard", authMiddleware, (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to dashboard",
    user: req.user,
  });
});
app.get("/profile", authMiddleware, (req, res) => {
  return res.status(200).json({
    success: true,
    message: "This is your profile",
    user: req.user,
  });
});

app.get("/error", (req, res, next) => {
  const error = new Error("This is a test error from /error route");
  next(error);
});

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
});

app.use((err, req, res, next) => {
  console.error("Error:", err.message);

  return res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
