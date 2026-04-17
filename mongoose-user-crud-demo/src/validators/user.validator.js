const { body, param, validationResult } = require('express-validator');
const ApiError = require('../utils/ApiError');

const handleValidation = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new ApiError(422, 'Validation failed', errors.array()));
  }

  next();
};

const addressValidators = (field = 'addresses') => [
  body(field).optional().isArray().withMessage(`${field} must be an array`),
  body(`${field}.*.type`).optional().isIn(['home', 'office', 'other']).withMessage('Address type must be home, office, or other'),
  body(`${field}.*.line1`).optional().notEmpty().withMessage('Address line1 is required'),
];

const createUserValidation = [
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  ...addressValidators('addresses'),
  handleValidation,
];

const updateUserPutValidation = [
  param('id').isMongoId().withMessage('Invalid user id'),
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  ...addressValidators('addresses'),
  handleValidation,
];

const updateUserPatchValidation = [
  param('id').isMongoId().withMessage('Invalid user id'),
  body('firstName').optional().notEmpty().withMessage('First name cannot be empty'),
  ...addressValidators('addresses'),
  handleValidation,
];

const userIdValidation = [
  param('id').isMongoId().withMessage('Invalid user id'),
  handleValidation,
];

module.exports = {
  createUserValidation,
  updateUserPutValidation,
  updateUserPatchValidation,
  userIdValidation,
};
