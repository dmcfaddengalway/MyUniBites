// spec.js
describe('uni-bites about tests', function() {
  var until = protractor.ExpectedConditions;
  
    beforeEach(function(){
    browser.waitForAngularEnabled(false);
    browser.get(browser.params.baseUrl + '/privacy-policy'); // rework to page pattern see : http://blog.scottlogic.com/2015/11/06/ProtractorForBeginnersPart1.html

  });

  it('should have the correct title', function() {
    expect(browser.getTitle()).toEqual('Privacy Policy');
  });


  afterEach(function(){
  });
});