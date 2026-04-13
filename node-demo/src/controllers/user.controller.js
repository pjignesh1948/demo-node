const userService = require("../services/user.service");
const sendResponse = require("../utils/responseHandler");

const getUsers = (req, res, next) => {
  try {
    const users = userService.getAllUsers();

    return sendResponse(res, 200, true, "Users fetched successfully", users);
  } catch (error) {
    next(error);
  }
};

const getUser = (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const user = userService.getUserById(id);

    if (!user) {
      return sendResponse(res, 404, false, "User not found");
    }

    return sendResponse(res, 200, true, "User fetched successfully", user);
  } catch (error) {
    next(error);
  }
};

const createUser = (req, res, next) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return sendResponse(res, 400, false, "Name and email are required");
    }

    const newUser = userService.createUser({ name, email });

    return sendResponse(res, 201, true, "User created successfully", newUser);
  } catch (error) {
    next(error);
  }
};

const updateUser = (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { name, email } = req.body;

    const updatedUser = userService.updateUser(id, { name, email });

    if (!updatedUser) {
      return sendResponse(res, 404, false, "User not found");
    }

    return sendResponse(res, 200, true, "User updated successfully", updatedUser);
  } catch (error) {
    next(error);
  }
};

const deleteUser = (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const deletedUser = userService.deleteUser(id);

    if (!deletedUser) {
      return sendResponse(res, 404, false, "User not found");
    }

    return sendResponse(res, 200, true, "User deleted successfully", deletedUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};