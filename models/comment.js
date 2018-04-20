const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
require('./util');

const commentSchema = new Schema({
    user_name: { 
        type: ObjectId, 
        ref: "unibites-users" 
    },
    comment: { type: String },
    date_created: {
        type: Date,
        default: new Date()
    },
    rating: Number,
    cafe:{
        type: ObjectId,
        ref: "unibites-cafes"
    }
});

module.exports = mongoose.model('unibites-comments', commentSchema);
    