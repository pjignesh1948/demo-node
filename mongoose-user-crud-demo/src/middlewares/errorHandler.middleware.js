const mongoose = require('mongoose');
const { errorResponse } = require('../utils/apiResponse');

const errorHandler = (error, req, res, next) => {
  console.error(error);

  if (error.name === 'ValidationError') {
    const formattedErrors = Object.values(error.errors).map((item) => ({
      field: item.path,
      message: item.message,
    }));

    return errorResponse(res, 422, 'Validation failed', formattedErrors);
  }

  if (error instanceof mongoose.Error.CastError) {
    return errorResponse(res, 400, `Invalid ${error.path}: ${error.value}`);
  }

  if (error.code === 11000) {
    const duplicateField = Object.keys(error.keyPattern || {})[0] || 'field';
    return errorResponse(res, 409, `${duplicateField} already exists`);
  }

  if (error.statusCode) {
    return errorResponse(res, error.statusCode, error.message, error.errors || null);
  }

  return errorResponse(res, 500, 'Internal server error');
};

module.exports = errorHandler;
