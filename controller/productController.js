
const product = require('../models/product.js');

const productList = function (callback) {
    product.find({}, function (err, data) {
        if (err) {
            console.log(err);
            next(err);
        }
        return callback(err, data);
    });
};

const addProduct = function (data , callback) {
    let productData= new product ({
        "name": prdname,
        "slug": slugify(prdname),
    })
    productData.save( err => {
        return callback (err,{ success: true, msg: 'Product added' })
    })
}

const updateProduct = function (prdId, data, callback) {
    let productData= new product ({
        "name": prdname,
        "slug": slugify(prdname),
    })
    productData.save( err => {
        return callback (err,{ success: true, msg: 'Product added' })
    })

}

const deleteProduct = function (prdId, callback) {
    let productData= new product ({
        "name": prdname,
        "slug": slugify(prdname),
    })
    productData.save( err => {
        return callback (err,{ success: true, msg: 'Product added' })
    })

}

module.exports = {
    productList : productList,
    addProduct : addProduct,
    updateProduct : updateProduct,
    deleteProduct : deleteProduct,
}