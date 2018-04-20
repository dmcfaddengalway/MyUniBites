const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Comment = require('./comment');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

require('./util');

const cafeSchema = new mongoose.Schema({
    name: { type: String },
    location: { type: String },
    urlTag: { type: String },
    comments:[{
        type: ObjectId,
        ref: "unibites-comments"
    }]
});

cafeSchema.methods.avgRating = function (average){
    return Comment.aggregate([
    {
        $group: {
            _id: '$cafe',
            ratingAvg: {$avg: '$rating'}
        }
    }
]);
   
};


module.exports = mongoose.model('unibites-cafes', cafeSchema);