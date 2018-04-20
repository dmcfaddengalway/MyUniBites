//spec.js
describe('uni-bites cafe tests', () => {
    const until = protractor.ExpectedConditions;
  
    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        browser.get(`${browser.params.baseUrl}/cafe/an-bialann`); //rework to page pattern see : http://blog.scottlogic.com/2015/11/06/ProtractorForBeginnersPart1.html
    });

    it('should have the correct title', () => {
        expect(browser.getTitle()).toEqual('An Bialann | Uni-Bites');
    });

    it('should contain the cafe name', () => {
        const cafeHeader = element(by.css('h1'));
        expect(cafeHeader).not.toBeNull();
        
        expect(cafeHeader.getText()).toBe('An Bialann');
    });

    afterEach(() => {
    });
});