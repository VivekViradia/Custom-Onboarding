const express = require('express');
const { getConfig, saveConfig } = require('../controllers/config.controller');

const router = express.Router();

router.get('/getConfig', getConfig);
router.post('/saveConfig', saveConfig);

export default router;
