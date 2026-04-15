function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided.",
    });
  }

  if (authHeader !== "Bearer mysecrettoken") {
    return res.status(403).json({
      success: false,
      message: "Invalid token.",
    });
  }

  req.user = {
    id: 1,
    name: "Demo User",
    role: "admin",
  };

  next();
}

module.exports = authMiddleware;
