const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const hbsHelpers = require('./lib');

router.get('/', (req, res, next) => {
    res.render('register', { title: 'uni-bites - Register', hbsHelpers: hbsHelpers(req) });
});

function createJwt(profile) {
    return jwt.sign(profile, 'CSIsTheWorst', {
        expiresIn: '10d'
    });
}

module.exports = router;