const router = require('express').Router();

const categoryController = require('../controller/categoryController');

const category = require('../models/category.js');

router.get('/', function (req, res, next) {
    console.log('here');
    categoryController.categoryList((err, result) => {
        if (err) {
            return next(err);
        }
        return res.json(result);
    })
});

router.get('/:id', function (req, res, next) {
    console.log('here');
    categoryController.categoryDetail(req.params.id, function (err, result) {
        if (err) return next(err);
        res.json(result);
      });
    
});

router.post('/add', function (req, res, next) {
    console.log(req.body);
    console.log('add request');
    categoryController.addCategory(req.body , (err, result) => {
        if (err) {
            console.log(err);
            return next(err);
        }
        return res.json(result);
    })
});

router.put('/:id', (req, res) => {
    console.log(req.body);
    const catId = req.params.id;
    console.log(catId);
    categoryController.updateCategory(req.body, catId, (err, result) => {
        if (err) {
            return next(err);
        }
        return res.json(result);
    });
});

router.delete('/:catId', (req, res) => {
    const catId = req.params.catId;
    categoryController.deleteCategory(catId, (err, result) => {
        if (err) {
            return next(err);
        }
        return res.json(result);
    });
});

module.exports = router;