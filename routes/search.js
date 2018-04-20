const express = require('express');

const router = express.Router();

/*GET about us page. */
router.get('/', (req, res, next) => {
    res.render('search', { title: 'Search Results' });
});

module.exports = router;