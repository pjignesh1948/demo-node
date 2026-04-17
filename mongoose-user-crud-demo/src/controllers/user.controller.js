const userService = require('../services/user.service');
const { successResponse } = require('../utils/apiResponse');
const asyncHandler = require('../utils/asyncHandler');

const createUser = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req.body);
  return successResponse(res, 201, 'User created successfully', user);
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await userService.getAllUsers(req.query);
  return successResponse(res, 200, 'Users fetched successfully', users);
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await userService.getUserById(req.params.id, req.query.includeDeleted === 'true');
  return successResponse(res, 200, 'User fetched successfully', user);
});

const updateUserByPut = asyncHandler(async (req, res) => {
  const user = await userService.updateUserByPut(req.params.id, req.body);
  return successResponse(res, 200, 'User updated successfully', user);
});

const updateUserByPatch = asyncHandler(async (req, res) => {
  const user = await userService.updateUserByPatch(req.params.id, req.body);
  return successResponse(res, 200, 'User partially updated successfully', user);
});

const softDeleteUser = asyncHandler(async (req, res) => {
  const user = await userService.softDeleteUser(req.params.id);
  return successResponse(res, 200, 'User soft deleted successfully', user);
});

const restoreUser = asyncHandler(async (req, res) => {
  const user = await userService.restoreUser(req.params.id);
  return successResponse(res, 200, 'User restored successfully', user);
});

const hardDeleteUser = asyncHandler(async (req, res) => {
  const user = await userService.hardDeleteUser(req.params.id);
  return successResponse(res, 200, 'User permanently deleted successfully', user);
});

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserByPut,
  updateUserByPatch,
  softDeleteUser,
  restoreUser,
  hardDeleteUser,
};
