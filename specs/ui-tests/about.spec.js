//spec.js
describe('uni-bites about tests', () => {
    const until = protractor.ExpectedConditions;
  
    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        browser.get(`${browser.params.baseUrl}/about-us`); //rework to page pattern see : http://blog.scottlogic.com/2015/11/06/ProtractorForBeginnersPart1.html
    
        paragraph1 = element(by.id('Paragraph1'));
        paragraph2 = element(by.id('Paragraph2'));
    });

    it('should have the correct title', () => {
        expect(browser.getTitle()).toEqual('About Us');
    });

    it('should pass if the three paragraphs are there', () => {
        expect(paragraph1.getText()).toContain('Uni-Bites is a web-app that compares');
        expect(paragraph2.getText()).toContain('Our team of modern college students');
    });

    afterEach(() => {
    });
});