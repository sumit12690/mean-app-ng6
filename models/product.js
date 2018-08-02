const mongoose = require('mongoose');
const moment = require('moment');

const ProductSchema = mongoose.Schema({
    name : String,
    price : Number,
    created_at: { type: String, Deafult: moment().format() },
    updated_at: { type: String },
});

module.exports = mongoose.model('Product', ProductSchema);