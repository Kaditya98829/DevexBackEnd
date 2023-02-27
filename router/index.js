const express = require('express');
const { register, logIn, update, removeUser, userslist } = require('../controller');
const router = express.Router();

router.post('/register/user', register);
router.post('/login', logIn);
router.put('/update/user/:id', update);
router.delete('/delete/user/:id', removeUser);
router.get('/users', userslist);
module.exports = router;