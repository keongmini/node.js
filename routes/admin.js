const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

const adminController = require('../controllers/admin');

const router = express.Router();




// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

// router.get('/add-product',(req, res, next) => {
//     // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
//     res.render('add-product', {pageTitle:'Add Product', path:'/admin/add-product'})
// });

// /admin/add-product => POST
router.post('/add-product',adminController.postAddProduct);

// router.post('/add-product', (req, res, next) => {
//     products.push({ title:req.body.title })
//     res.redirect('/');
// })

module.exports = router;
// exports.routes = router;
// exports.products = products;