const express = require('express');

const  checkout  = require('../controller/paymentController');
const {jwtAuthMiddleware,generateToken} = require('../middlewares/jwt');

const router = express.Router();

router.post('/checkout',jwtAuthMiddleware,checkout);

module.exports = router;



