const express = require('express');

const router = express.Router();
const hbsHelpers = require('./lib');

/*GET about us page. */
router.get('/', (req, res, next) => {
    res.render('about-us', { title: 'About Us', hbsHelpers: hbsHelpers(req) });
});

module.exports = router;