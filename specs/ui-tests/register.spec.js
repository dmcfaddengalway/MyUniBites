//spec.js
//var mongoose = require('mongoose');
const User = require('../../models/user');

describe('uni-bites user registration', () => {
    var until = protractor.ExpectedConditions;

    let txtFullName;
    let txtEmail;
    let txtPassword;
    let txtConfirmPassword;
    let btnSubmit;
    let errorMessage;

    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        browser.get(`${browser.params.baseUrl}/register`); //rework to page pattern see : http://blog.scottlogic.com/2015/11/06/ProtractorForBeginnersPart1.html

        txtFullName = element(by.id('inputFullName'));
        txtEmail = element(by.id('inputEmail'));
        txtPassword = element(by.id('inputPassword'));
        txtConfirmPassword = element(by.id('inputConfirmPassword'));

        errorMessage = element(by.id('swal2-content'));

        btnSubmit = element(by.css('button[type=\'submit\']'));
    });

    afterAll(() => {
    //Remove the test user.. this is a bit odd here as the test user could only be created
    //once but if there is a need for the user to be removed after several individual test
    //we need to reverting to the previous code.. setting a boolean parameter after the test
    //and checking for that after each test.. (that is pobably better but the code is ugly)
        User.findOneAndRemove({ email: browser.params.registerUser.email }).exec();
    });

    it('should have the correct title', () => {
        expect(browser.getTitle()).toEqual('uni-bites - Register');
    });

    it('should fail if full name is empty', () => {
        txtFullName.sendKeys('');
        btnSubmit.click();

        browser.wait(until.visibilityOf(errorMessage), 5000);

        expect(errorMessage.getText()).toContain('Please enter a full name.');
    });

    it('should fail if the email is empty', () => {
        txtFullName.sendKeys(browser.params.registerUser.name);
        txtEmail.sendKeys('');
        btnSubmit.click();

        browser.wait(until.visibilityOf(errorMessage), 5000);

        expect(errorMessage.getText()).toContain('Please enter an email.');
    });

    it('should fail if the password does not match the confirmation password', () => {
        txtFullName.sendKeys(browser.params.registerUser.name);
        txtEmail.sendKeys(browser.params.registerUser.email);
        txtPassword.sendKeys('1');
        txtConfirmPassword.sendKeys('2');
        btnSubmit.click();

        browser.wait(until.visibilityOf(errorMessage), 5000);

        expect(errorMessage.getText()).toContain('Password and password confirmation do not match.');
    });

    it('should add the user and show the logged in page if successful', () => {
        txtFullName.sendKeys(browser.params.registerUser.name);
        txtEmail.sendKeys(browser.params.registerUser.email);
        txtPassword.sendKeys(browser.params.registerUser.password);
        txtConfirmPassword.sendKeys(browser.params.registerUser.password);

        btnSubmit.click();

        browser.wait(until.not(until.urlContains('/register')), 5000);

        //dont expect an error message to be shown
        expect(errorMessage.isPresent()).toBe(false);

        //todo: wait for page to change
        expect(browser.getCurrentUrl()).toContain('/feed');
    });
});