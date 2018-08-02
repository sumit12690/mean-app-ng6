
const category = require('../models/category.js');

const mongoose = require('mongoose');

const objectid = mongoose.Types.ObjectId;

const categoryList = function (callback) {
    category.find({}, function (err, data) {
        if (err) {
            callback(err);
        }
        return callback(err, data);
    });
};

const categoryDetail = function (catId , callback) {

    category.findById({ "_id": objectid(catId) } , function (err, data) {

        if (err) {
            console.log(err);
            return callback(err);
        }

        return callback(err, data);
    });

};

const addCategory = function (data , callback) {
    let categoryData= new category ({
        "name": data.category_name,
    });

    categoryData.save( err => {
        if (err) {
            return callback(err);
        }
        return callback (err, {success: true, msg: 'Category added'});
    });
}

const updateCategory = function (data , catId , callback) {
    console.log(data);
    console.log(catId);
    category.findByIdAndUpdate(  { "_id" : objectid(catId) } , { 'name' : data.category_name }, err => {
        console.log(err);
        return callback ( err , { success: true, msg: 'Category updated' })
    });

}

const deleteCategory = function (catId, callback) {
    category.findByIdAndRemove(   { "_id" : objectid(catId) } , err => {
        return callback (err,{ success: true, msg: 'Category deleted' })
    });

}

module.exports = {
    categoryList : categoryList,
    categoryDetail : categoryDetail,
    addCategory : addCategory,
    updateCategory : updateCategory,
    deleteCategory : deleteCategory,
}