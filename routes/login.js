const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

/*GET login page. */
router.get('/', (req, res, next) => {
    res.render('login', { title: 'uni-bites - Login' });
});

module.exports = router;