const express = require("express");
const userRoutes = require("./routes/user.routes");
const errorHandler = require("./middleware/errorHandler");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "API is running",
    });
});
app.use("/api/users", userRoutes);
app.use(errorHandler);
module.exports = app;