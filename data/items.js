const mongoose = require('mongoose');
const Item = require('../models/item');
const Cafe = require('../models/cafe');

const items = [
    {
        name: "Tea",
        price: [{cafeTag: "an-bialann", price: 1.00}, {cafeTag: "zinc", price: 1.00}, {cafeTag: "smokeys", price: 1.30}, {cafeTag: "cafe-na-gaeilge", price: 1.20}, {cafeTag: "sult", price: 1.10}, {cafeTag: "wall", price: 1.00}, {cafeTag: "friars", price: 1.00}],
        category: "Drink"
    },
    {
        name: "Coffee",
        price: [{cafeTag: "an-bialann", price: 2.00}, {cafeTag: "zinc", price: 2.50}, {cafeTag: "smokeys", price: 2.30}, {cafeTag: "cafe-na-gaeilge", price: 2.60}, {cafeTag: "sult", price: 2.10}, {cafeTag: "wall", price: 2.40}, {cafeTag: "friars", price: 2.00}],
        category: "Drink"
    },
    {
        name: "Americano",
        price: [{cafeTag: "an-bialann", price: 2.30}, {cafeTag: "zinc", price: 2.20}, {cafeTag: "smokeys", price: 2.30}, {cafeTag: "cafe-na-gaeilge", price: 2.20}, {cafeTag: "sult", price: 2.10}, {cafeTag: "wall", price: 2.00}, {cafeTag: "friars", price: 2.70}],
        category: "Drink"
    },
    {
        name: "Latte",
        price: [{cafeTag: "an-bialann", price: 2.00}, {cafeTag: "zinc", price: 2.40}, {cafeTag: "smokeys", price: 2.30}, {cafeTag: "cafe-na-gaeilge", price: 1.90}, {cafeTag: "sult", price: 1.80}, {cafeTag: "wall", price: 2.00}, {cafeTag: "friars", price: 2.20}],
        category: "Drink"
    },
    {
        name: "Scone",
        price: [{cafeTag: "an-bialann", price: 2.00}, {cafeTag: "zinc", price: 2.50}, {cafeTag: "smokeys", price: 2.00}, {cafeTag: "cafe-na-gaeilge", price: 1.90}, {cafeTag: "sult", price: 1.50}, {cafeTag: "wall", price: 2.00}, {cafeTag: "friars", price: 2.00}],
        category: "Lunch"
    },
    {
        name: "Sandwiches",
        price: [{cafeTag: "an-bialann", price: 3.95}, {cafeTag: "zinc", price: 4.50}, {cafeTag: "smokeys", price: 5.00}, {cafeTag: "cafe-na-gaeilge", price: 4.95}, {cafeTag: "sult", price: 4.00}, {cafeTag: "wall", price: 4.95}, {cafeTag: "friars", price: 4.95}],
        category: "Lunch"
    },
    {
        name: "Panini/Bap",
        price: [{cafeTag: "an-bialann", price: 3.95}, {cafeTag: "zinc", price: 5.00}, {cafeTag: "smokeys", price: 4.70}, {cafeTag: "cafe-na-gaeilge", price: 4.50}, {cafeTag: "sult", price: 4.30}, {cafeTag: "wall", price: 3.95}, {cafeTag: "friars", price: 4.95}],
        category: "Lunch"
    },
    {
        name: "Salad",
        price: [{cafeTag: "an-bialann", price: 6.00}, {cafeTag: "zinc", price: 5.50}, {cafeTag: "smokeys", price: 5.30}, {cafeTag: "cafe-na-gaeilge", price: 6.20}, {cafeTag: "sult", price: 4.80}, {cafeTag: "wall", price: 4.95}, {cafeTag: "friars", price: 5.50}],
        category: "Lunch"
    },
    {
        name: "Chocolate Bar",
        price: [{cafeTag: "an-bialann", price: 1.00}, {cafeTag: "zinc", price: 0.50}, {cafeTag: "smokeys", price: 1.30}, {cafeTag: "cafe-na-gaeilge", price: 1.10}, {cafeTag: "sult", price: 1.10}, {cafeTag: "wall", price: 1.20}, {cafeTag: "friars", price: 0.90}],
        category: "Lunch"
    }
];

function add_items() {
    //clear out entries, add default data
    return Item.deleteMany({}).then(
        (res) => {
            console.log('[Items]');
            console.log('Removed existing items, %s', res);
            return Item.insertMany(items, (err, docs) => {
                for(let i = 0; i < docs.length; i++) {
                    console.log(`    * ${docs[i].name}`);
                }
                console.log();
            })
        }
    );
}

module.exports = add_items;