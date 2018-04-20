
[!first] tidy up connection to mongoose and check its use inside the specs/integration tests, existing 
system outputs way too much to the console when used from within the specs/integration tests.

[next] inserting data into the database.

# fix error 1:

(node:13984) DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the
 `useMongoClient` option if using `connect()` or `createConnection()`. See http://mongoosejs.com/docs/connections.
html#use-mongo-client
Db.prototype.authenticate method will no longer be available in the next major release 3.x as MongoDB 3.6 will only allow auth against users in the admin db and will no longer allow multiple credentials on a socket. Please authenticate using MongoClient.connect with auth credentials.

# fix error 2:
(node:13984) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): TypeError: removeExisting(...).then(...).error is not a function
(node:13984) DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

Error does not occur in the Comments section. Possibly due to the way they are called in populate-db.js

# Notes:
https://github.com/madhums/node-express-mongoose-demo/blob/master/config/routes.js
https://github.com/madhums/node-express-mongoose-demo/blob/master/test/test-users-create.js

# TODO
 * Make set the menu active class based on the url
 * Test
 * Add Test code

# Add mocha, chai, json-server | postman mock server, e2e, chromedriver tests 
https://github.com/elliotf/mocha-mongoose/blob/master/example/manual.js

# Promisifying:
Promises in the data

var Mongoose = Promise.promisifyAll(require("mongoose"));
http://bluebirdjs.com/docs/working-with-callbacks.html

read PROPERLY!
https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html

mongoose.Promise = require('bluebird');

var Promise = require("bluebird");
Promise.promisifyAll(require("mongoose"));

// the async version of User.findById will be User.findByIdAsync
https://gist.github.com/bclinkinbeard/5171359
http://bluebirdjs.com/docs/getting-started.html

https://github.com/caolan/async
http://mongoosejs.com/docs/populate.html

https://github.com/elliotf/mocha-mongoose


# Testing
Use protractor for ui testing, not just for AngularJS.
* http://www.protractortest.org/#/tutorial

Use supertest for testing the api's, copy the postman tests and implement them in 
code.

## Testing Stack
* Jasmine [Language, BDD type syntax]
* Chai [Should style assertions]
* Protractor [Test runner, possible to manage multiple browsers]

https://github.com/angular/protractor/blob/master/docs/frameworks.md

https://www.codementor.io/codementorteam/javascript-testing-framework-comparison-jasmine-vs-mocha-8s9k27za3
https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3
https://medium.com/@boriscoder/the-hidden-power-of-jest-matchers-f3d86d8101b0

# settings.json
Extract all settings out to a json file and add this to the
git.ignores file

# move app.js out into seperate servers, testing-server.js, production-server.js, develop-server.js each with seperate db's and seperate ports to enable easy quick unit testing locally while also possibly running seperate production and develop servers on the same box. 


DOCS:
https://jasmine.github.io/2.0/introduction.html
http://www.protractortest.org/#/
http://www.protractortest.org/#/locators#actions


http://www.protractortest.org/#/typescript


# Notes on running ui-tests
If you have not used the testing system before you will need to run 

'npm run test:once' 

To install thenecessary drivers for chrome, firefox, android and ios depending on 
your system.   

You will need two command prompts in the base of the project directory to run the 
tests. Once will run the servers and the other will give you feedback on the test 
runs. In one command window run:

'npm run test:servers'

This will start two servers one is just the default 'npm start' to get the website 
running the other is a handler for the browser based test runners. 

You can test that these have succeded by checking the two urls that they start:

[1] http://localhost:8604/
[2] http://localhost:4444/wd/hub

[1] is a testing version of the website, [2] is the management interface for the 
browser based tests, it start new instances of a bowser when you call the
'npm run test' script. When you run 'npm run test' it will only give you feedback 
on the tests tha failed, i.e. the ones that need to be fixed.

[notes]
Ideally we should be parameterising the server urls and using a seperate database 
that is created during the test start up. Thus there would be no problem with stale 
data in the database and we could start from a known point each time the ui-test are 
run.   

[Common errors with ui tests]
 * Not running `npm run test:once` after running `npm install` 



# Node Documentation
+http://expressjs.com/en/4x/api.html#res
+
+# Partials and different layouts
+https://github.com/ericf/express-handlebars/blob/master/examples/advanced/server.js