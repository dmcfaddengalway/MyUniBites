const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const cafe = require('../models/cafe');

var pricedItemSchema = new Schema(
    {
        cafeTag: {type: String},
        price: {type: Number},
        category: {type: String}
    }
);

require('./util');

const itemSchema = new Schema({
    name: { type: String },
    price: [pricedItemSchema]
});

module.exports = mongoose.model('unibites-items', itemSchema);