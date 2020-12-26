const { createUser,
    getUserByUserId,
    getUsers,
    updateUser,
    deleteUser , login} = require('./user.controller');

const express = require('express');
const router = express.Router();
const { checkToken } = require('../../auth/token.validation');

router.post('/', checkToken, createUser);
router.get('/', checkToken ,getUsers);
router.get('/:id', checkToken , getUserByUserId);
router.patch('/', checkToken , updateUser);
router.delete('/:id', checkToken , deleteUser);
router.post('/login', login);

module.exports = router;