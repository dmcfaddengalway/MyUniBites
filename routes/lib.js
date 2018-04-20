const jwt = require('jsonwebtoken');

function helpers(request) {
    const req = request;
    console.log('helpers.authorised called');

    let auth = false;
    if(req.cookies.Authorization) {
        const jwtString = req.cookies.Authorization.split(' ');

        let profile = null;
        try{
            profile = verifyJwt(jwtString[1]);
        } catch(ex) {
            console.log('Helpers: Caught exception: %s', ex);
        }

        auth = profile != null;
    }

    var url = "?returnUrl="+encodeURIComponent(req.originalUrl); // url wont 
    // work here because the multi level on the routing

    return helpers = {
        authorised: auth,
        notAuthorised: !auth,

        returnUrl: url,
        getReturnUrl: function(){return "IMPLEMENT ME!"},

        isAuthorised() {
            console.log('helpers.isAuthorised called');
            return auth;
        },
        unAuthorised() {
            console.log('helpers.unAuthorised called');
            return!auth;
        },
        username() {
            console.log('helpers.username called');

            //TODO: save username in cookie on login
            return'Not Implemented';
        }
    };
}

function verifyJwt(jwtString) {
    const value = jwt.verify(jwtString, 'CSIsTheWorst');
    return value;
}

module.exports = helpers;