//spec.js
describe('uni-bites homepage tests', () => {
    const until = protractor.ExpectedConditions;

    let ddCafes;
    let ddCafesMenu;
  
    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        browser.get(`${browser.params.baseUrl}`); //rework to page pattern see : http://blog.scottlogic.com/2015/11/06/ProtractorForBeginnersPart1.html
    });

    //home page dropdown should
    it('should have the correct title', () => {
        expect(browser.getTitle()).toEqual('uni-bites');
    });

    //Search
    //it('should do some search stuff when the search button is clicked ', () => {
    //ddCafes.click();
    //});

    //navigation
    it('should display the cafes menu when the button is clicked', () => {
        const ddCafes = element(by.css('#dropdown-toggle'));
        const ddCafesMenu = element(by.css('#dropdown-menu'));

        expect(ddCafes).not.toBeNull();
        expect(ddCafesMenu).not.toBeNull();

        ddCafes.click();
        expect(ddCafesMenu.isPresent()).toBeTruthy('cafemenu not shown');
    });

    it('should go to the about us page when the about us button is clicked', () => {
        const btnAboutUs = element(by.linkText('About Us'));

        expect(btnAboutUs).not.toBeNull();

        btnAboutUs.click();

        browser.wait(until.urlContains('/about-us'), 5000);
    });

    it('should go to the about us page when the about us button is clicked', () => {
        const btnLoginRegister = element(by.linkText('Login/Register'));

        expect(btnLoginRegister).not.toBeNull();

        btnLoginRegister.click();

        browser.wait(until.urlContains('/login'), 5000);
    });

    afterEach(() => {
    });
});