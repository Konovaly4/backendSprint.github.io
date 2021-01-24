/* eslint-disable linebreak-style */
const router = require('express').Router();
const {
  getUsers, getUserById, updateUser, updateAvatar, logout,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/me', getUserById);
// router.get('/:id', getUserById);
router.post('/signout', logout);
router.patch('/me', updateUser);
router.patch('/me/avatar', updateAvatar);

module.exports = router;
