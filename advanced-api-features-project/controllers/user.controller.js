exports.getUsers = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const filter = {};

    if (req.query.role) {
      filter.role = req.query.role;
    }

    if (req.query.search) {
      filter.$or = [
        { name: { $regex: req.query.search, $options: "i" } },
        { email: { $regex: req.query.search, $options: "i" } }
      ];
    }

    const sortBy = req.query.sortBy || "createdAt";
    const order = req.query.order === "asc" ? 1 : -1;

    res.json({
      success: true,
      message: "This controller demonstrates pagination, filtering, sorting and search",
      query: {
        page,
        limit,
        skip,
        filter,
        sort: { [sortBy]: order }
      }
    });
  } catch (err) {
    next(err);
  }
};
