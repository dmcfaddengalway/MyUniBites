const express = require('express');

const router = express.Router();
const User = require('../models/cafe');
const hbsHelpers = require('./lib');

/*GET cafe page. */
router.get('/:cafename', (req, res, next) => {
    console.log(req.params.cafename);
    const cafes = req.app.locals.cafes;
    let currentCafe = null;
    for(let i = 0; i < cafes.length; i++) {
        if(cafes[i].urlTag == req.params.cafename) {
            currentCafe = cafes[i];
            break;
        }
    }


    const viewModel = {
        hbsHelpers: hbsHelpers(req),
        cafe: currentCafe,
        title: `${currentCafe.name} | Uni-Bites`,
        lunch_menu: [
            {
                name: "Scone",
                price: 1.00
            },
            {
                name: "Sandwiches",
                price: 1.00
            },
            {
                name: "Panini/Bap",
                price: 1.00
            },
            {
                name: "Salad",
                price: 1.00
            },
            {
                name: "Chocolate Bar",
                price: 1.00
            }
        ],
        drink_menu: [
            {
                name: "Tea",
                price: 1.00
            },
            {
                name: "Coffee",
                price: 1.00
            },
            {
                name: "Americano",
                price: 1.00
            },
            {
                name: "Latte",
                price: 1.00
            },
            {
                name: "Milk",
                price: 100.00
            }
        ]
    };

    res.render('cafe',  viewModel);
});

module.exports = router;