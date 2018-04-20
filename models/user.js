const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

require('./util');

const usersSchema = new Schema({
    full_name: { type: String },
    email: { type: String },
    password_hash: { type: String },
    date_created: {
        type: Date,
        default: new Date()
    },
    fb_id: {
        type: String,
        default: null
    },
    access_token: { type: String }
});

usersSchema.pre('save', (next) => {
    //object validation should go in these handlers
    next();
});

usersSchema.statics.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

usersSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password_hash);
};

module.exports = mongoose.model('unibites-users', usersSchema);