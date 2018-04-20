const express = require('express');
const router = express.Router();
const hbsHelpers = require('./lib');

/*GET privacy policy page. */
router.get('/', (req, res, next) => {
    res.render('privacy-policy', { title: 'Privacy Policy', hbsHelpers: hbsHelpers(req) });
});

module.exports = router;