const express = require('express');
const router = express.Router();

const controller = require('../controllers/product');

router.get('/list', controller.product_list);
router.get('/:id', controller.product_detail);


module.exports = router;