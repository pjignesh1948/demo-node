require("dotenv").config();
const express = require("express");
const app = express();

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const errorHandler = require("./middlewares/error.middleware");

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);

app.use(errorHandler);

app.listen(5010, () => {
  console.log("Server running on port 5010");
});
