const express = require('express');
const router = express.Router();

const item_controller = require('../controllers/items_controllers');

router.get('/test', item_controller.item);
router.get('/increase', item_controller.increase);
router.get('/decrease', item_controller.decrease);

module.exports = router;