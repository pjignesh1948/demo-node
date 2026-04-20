const express = require("express");
const router = express.Router();
const { getUsers } = require("../controllers/user.controller");
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");

router.get("/", auth, getUsers);
router.delete("/:id", auth, role("super_admin"), (req, res) => {
  res.json({ success: true, message: "User deleted" });
});

module.exports = router;
