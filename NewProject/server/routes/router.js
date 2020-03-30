const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/userController');

router.post('/register', ctrlUser.register);

router.post('/login', ctrlUser.login);

router.get('/userProfile', ctrlUser.userProfile);

module.exports = router;