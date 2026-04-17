const User = require('../models/user.model');
const ApiError = require('../utils/ApiError');

const createUser = async (payload) => {
  try {
    const user = await User.create(payload);
    return user;
  } catch (error) {
    if (error.code === 11000) {
      const duplicateField = Object.keys(error.keyPattern || {})[0] || 'field';
      throw new ApiError(409, `${duplicateField} already exists`);
    }
    throw error;
  }
};

const getAllUsers = async (query) => {
  const filter = {};

  if (query.includeDeleted !== 'true') {
    filter.isDeleted = false;
  }

  if (query.role) {
    filter.role = query.role;
  }

  if (query.search) {
    filter.$or = [
      { firstName: { $regex: query.search, $options: 'i' } },
      { lastName: { $regex: query.search, $options: 'i' } },
      { email: { $regex: query.search, $options: 'i' } },
      { phone: { $regex: query.search, $options: 'i' } },
    ];
  }

  const users = await User.find(filter).sort({ createdAt: -1 });
  return users;
};

const getUserById = async (id, includeDeleted = false) => {
  const filter = { _id: id };

  if (!includeDeleted) {
    filter.isDeleted = false;
  }

  const user = await User.findOne(filter);

  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  return user;
};

const updateUserByPut = async (id, payload) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: id, isDeleted: false },
      payload,
      { new: true, runValidators: true }
    );

    if (!user) {
      throw new ApiError(404, 'User not found or already deleted');
    }

    return user;
  } catch (error) {
    if (error.code === 11000) {
      const duplicateField = Object.keys(error.keyPattern || {})[0] || 'field';
      throw new ApiError(409, `${duplicateField} already exists`);
    }
    throw error;
  }
};

const updateUserByPatch = async (id, payload) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: id, isDeleted: false },
      { $set: payload },
      { new: true, runValidators: true }
    );

    if (!user) {
      throw new ApiError(404, 'User not found or already deleted');
    }

    return user;
  } catch (error) {
    if (error.code === 11000) {
      const duplicateField = Object.keys(error.keyPattern || {})[0] || 'field';
      throw new ApiError(409, `${duplicateField} already exists`);
    }
    throw error;
  }
};

const softDeleteUser = async (id) => {
  const user = await User.findOneAndUpdate(
    { _id: id, isDeleted: false },
    { isDeleted: true, deletedAt: new Date() },
    { new: true }
  );

  if (!user) {
    throw new ApiError(404, 'User not found or already deleted');
  }

  return user;
};

const restoreUser = async (id) => {
  const user = await User.findOneAndUpdate(
    { _id: id, isDeleted: true },
    { isDeleted: false, deletedAt: null },
    { new: true }
  );

  if (!user) {
    throw new ApiError(404, 'Deleted user not found');
  }

  return user;
};

const hardDeleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  return user;
};

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
