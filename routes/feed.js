const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const hbsHelpers = require('./lib');

/*GET feed page. */
router.get('/', (req, res, next) => {
    //TODO: move catch into the verifyJwt, recode verifyJwt to return a boolean
    try{
        const jwtString = req.cookies.Authorization.split(' ');
        console.log('req.cookies.Authorization: %s', req.cookies.Authorization);
        const profile = verifyJwt(jwtString[1]);
        if(profile) {
            res.render('feed', { hbsHelpers: hbsHelpers(req) });
        }
    } catch(err) {
        console.log('/feed Caught error: %s', JSON.stringify(err));
        res.render('unauthorised', {
            title: '',
            description: 'You are not authorised to access this url, please login first.',
            url: '/feed'
        });
    }
});

function verifyJwt(jwtString) {
    const value = jwt.verify(jwtString, 'CSIsTheWorst');
    return value;
}

module.exports = router;