const mongoose = require('mongoose');
const moment = require('moment');

const CategorySchema = mongoose.Schema({
    name: { type: String },
    created_at: { type: String, Deafult: moment().format() },
    updated_at: { type: String },
});

module.exports = mongoose.model('Category', CategorySchema);