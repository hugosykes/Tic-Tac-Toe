'use strict';

Browser.localhost('tic-tac-toe.com', 3001);

describe('Set up', function() {
  const browser = new Browser();

  before(function(done) {
    this.server = http.createServer(app).listen(3001);
    browser.visit('/', done);
  });

  describe('home page', function () {
    it('should have expected url', function() {
      expect(browser.url).to.equal('http://tic-tac-toe.com/');
    });

    it('should have a place to enter the first players name', function () {
      expect(browser.text('#container')).to.include("Enter player one's name:");
    });
  });
  
  after(function(done) {
    this.server.close(done);
  });
});
