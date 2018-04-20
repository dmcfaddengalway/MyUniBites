/* This tests the buttons in footer link to social media. (Tests from homepage)*/

describe('uni-bites about tests', () => {
    const until = protractor.ExpectedConditions;
  
    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        browser.get(`${browser.params.baseUrl}`); //rework to page pattern see : http://blog.scottlogic.com/2015/11/06/ProtractorForBeginnersPart1.html
    
        fbIcon = element(by.id('facebookIcon'));
        tweetIcon = element(by.id('twitterIcon'));
        instaIcon = element(by.id('instagramIcon'));
        
        fbURL = 'https://www.facebook.com/Uni-Bites-2463469143877653/?ref=page_internal';
        twitterURL = 'https://twitter.com/BitesUni';
        instagramURL = 'https://www.instagram.com/bitesuni/';
    });

    it('should link to facebook page', () => {
        fbIcon.click();
        browser.wait(until.urlContains('facebook'), 5000);
        expect(browser.getCurrentUrl()).toBe(fbURL);
    });

    it('should link to twitter page', () => {
        tweetIcon.click();
        browser.wait(until.urlContains('twitter'), 5000);
        expect(browser.getCurrentUrl()).toBe(twitterURL);
    });
    
    it('should link to instragram page', () => {
        instaIcon.click();
        browser.wait(until.urlContains('instagram'), 5000);
        expect(browser.getCurrentUrl()).toBe(instagramURL);
    });
    
    afterEach(() => {
    });
});