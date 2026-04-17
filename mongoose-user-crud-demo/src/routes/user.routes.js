const express = require('express');
const userController = require('../controllers/user.controller');
const {
  createUserValidation,
  updateUserPutValidation,
  updateUserPatchValidation,
  userIdValidation,
} = require('../validators/user.validator');

const router = express.Router();

router.post('/', createUserValidation, userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userIdValidation, userController.getUserById);
router.put('/:id', updateUserPutValidation, userController.updateUserByPut);
router.patch('/:id', updateUserPatchValidation, userController.updateUserByPatch);
router.patch('/:id/soft-delete', userIdValidation, userController.softDeleteUser);
router.patch('/:id/restore', userIdValidation, userController.restoreUser);
router.delete('/:id', userIdValidation, userController.hardDeleteUser);

module.exports = router;
