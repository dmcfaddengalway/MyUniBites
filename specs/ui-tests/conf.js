require('dotenv').config();

const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
const path = require('path');

var reporter = new HtmlScreenshotReporter({
    dest: `${__dirname}/report`,
    filename: 'test-report.html',
    cleanDestination: true,
    captureOnlyFailedSpecs: true
});

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['*.spec.js'], //'*.spec.js'
    capabilities: {
        browserName: 'firefox' //manually change to chrome, android, ios etc.. for testing sessions
    },
    stackTrace: false,

    // Setup the report before any tests start
    beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },

    // Assign the test reporter to each running instance
    onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);
    },

    // Close the report after all tests finish
    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },

    params: {
        baseUrl: 'http://localhost:8604', //TODO: Pull this from  env file.. 
        validUser: {
            name: 'test',
            password: 'test'
        },

        registerUser: {
            name: 'test10',
            password: 'test10',
            email: 'test10@test10.com'
        }
    }
};