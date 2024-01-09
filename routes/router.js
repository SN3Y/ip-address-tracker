const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/', controller.home);
router.post('/search', controller.searching);


module.exports = router;