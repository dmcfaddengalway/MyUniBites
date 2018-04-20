const express = require('express');

const router = express.Router();
const Cafe = require('../models/cafe');

/*GET cafe page. */
router.get('/cafe/:cafename', (req, res, next) => {
    console.log(req.params.cafename);

    const cafeTag = req.params.cafename;
    const cafeTitle = '';
    let cafe = null;

    const cafes = req.app.locals.cafes;

    for(let i = 0; i < cafes.length; i++) {
        if(cafes[i].urlTag == cafeTag) {
            cafe = cafes[i];
            break;
        }
    }

    res.json(cafe);
});

module.exports = router;