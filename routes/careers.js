const express = require('express');
const router = express.Router();
const hbsHelpers = require('./lib');

/*GET careers page. */
router.get('/', (req, res, next) => {
    res.render('careers', { title: 'Careers @ Uni-Bites', hbsHelpers: hbsHelpers(req) });
});

module.exports = router;