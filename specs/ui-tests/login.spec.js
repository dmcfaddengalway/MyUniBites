//spec.js
describe('uni-bites login tests', () => {
    var until = protractor.ExpectedConditions;

    let txtEmail;
    let txtPassword;
    let btnSubmit;
    let errorMessage;

    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        browser.get(`${browser.params.baseUrl}/login`); //TODO: rework to page pattern see : http://blog.scottlogic.com/2015/11/06/ProtractorForBeginnersPart1.html

        txtEmail = element(by.id('inputEmail'));
        txtPassword = element(by.id('inputPassword'));
        errorMessage = element(by.id('swal2-content'));

        btnSubmit = element(by.css('button[type=\'submit\']'));
    });

    it('should have the correct title', () => {
        expect(browser.getTitle()).toEqual('uni-bites - Login');
    });

    it('should fail if login details are left empty', () => {
        txtEmail.sendKeys('');
        txtPassword.sendKeys('');
        btnSubmit.click();

        browser.wait(until.visibilityOf(errorMessage), 5000);

        expect(errorMessage.getText()).toBe('Please enter an email and password.');
    });

    it('should fail if password is empty', () => {
        txtEmail.sendKeys('Test');
        txtPassword.sendKeys('');
        btnSubmit.click();

        browser.wait(until.visibilityOf(errorMessage), 5000);

        expect(errorMessage.getText()).toBe('Please enter an email and password.');
    });

    it('should fail if email is empty', () => {
        txtEmail.sendKeys('');
        txtPassword.sendKeys('Password');
        btnSubmit.click();

        browser.wait(until.visibilityOf(errorMessage), 5000);
        
        expect(errorMessage.getText()).toBe('Please enter an email and password.');
    });

    it('should fail if an incorrect email/password is entered', () => {
        txtEmail.sendKeys('IncorrectUser');
        txtPassword.sendKeys('IncorrectPassword');
        btnSubmit.click();
        
        browser.wait(until.visibilityOf(errorMessage), 5000);

        expect(errorMessage.getText()).toBe('Invalid email/passsword.');
    });

    it('should pass if a correct email/password combination is entered', () => {
        txtEmail.sendKeys(browser.params.validUser.name);
        txtPassword.sendKeys(browser.params.validUser.password);
        btnSubmit.click();

        browser.wait(until.not(until.urlContains('/login')), 5000);

        //dont expect an error message to be shown
        expect(errorMessage.isPresent()).toBe(false);

        //todo: wait for page to change properly
        expect(browser.getCurrentUrl()).toContain('/feed');
    });

    afterEach(() => {
    });
});