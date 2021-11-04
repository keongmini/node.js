const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');
// const adminData = require('./admin');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

// router.get('/',(req, res, next) => {
//     const products = adminData.products;
//     res.render('shop', {prods : products, pageTitle:'Shop', path:'/'});
//     // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// });

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;