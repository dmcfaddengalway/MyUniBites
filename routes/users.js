const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

/*GET users listing. */
router.get('/', (req, res, next) => {
    res.send('respond with a resource');
});

router.get('/logout', (req, res, next) => {
    res.clearCookie('Authorization');
    res.redirect('/');
});

module.exports = router;