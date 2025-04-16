const express = require('express');
const { createOrUpdateUser, getAllUsers } = require('../controllers/user.controller');

const router = express.Router();

router.post('/createOrUpdateUser', createOrUpdateUser);
router.get('/getAllUsers', getAllUsers);

export default router;
