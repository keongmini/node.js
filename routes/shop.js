const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');
// const adminData = require('./admin');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);

// router.get('/',(req, res, next) => {
//     const products = adminData.products;
//     res.render('shop', {prods : products, pageTitle:'Shop', path:'/'});
//     // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// });

module.exports = router;