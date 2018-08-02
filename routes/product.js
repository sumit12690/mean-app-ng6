const router = require('express').Router();

const productController = require('../controller/productController');

router.get('/', function (req, res, next) {
    productController.productList((err, result) => {
        if (err) {
            return next(err);
        }
        return res.json(result);
    })
});

router.post('/', function (req, res, next) {
    productController.addProduct(req.body, (err, result) => {
        if (err) {
            return next(err);
        }
        return res.json(result);
    })
});

router.put('/:prdId', (req, res, next) => {
    const prdId = req.params.prdId;
    productController.updateProduct(req.body, prdId, (err, result) => {
        if (err) {
            return next(err);
        }
        return res.json(result);
    });
});

router.delete('/:prdId', (req, res, next) => {
    const prdId = req.params.prdId;
    productController.deleteProduct(prdId, (err, result) => {
        if (err) {
            return next(err);
        }
        return res.json(result);
    });
});

module.exports = router;