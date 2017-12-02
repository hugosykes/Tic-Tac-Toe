'use strict';

Browser.localhost('tic-tac-toe.com', 3001);

describe('Players', function() {
  const browser = new Browser();

  before(function(done) {
    this.server = http.createServer(app).listen(3001);
    browser.visit('/', done);
  });

  before(function(done) {
    browser
    .fill('#player-name', 'Hugo')
    .pressButton('#name-submit', done);
  });

  before(function(done) {
    browser
    .fill('#player-name', 'Tom')
    .pressButton('#name-submit', done);
  });

  describe('entering player names', () => {
    it("should have player one's name", () => {
      expect(browser.text('#welcome')).to.include('Hugo is crosses');
    });
    
    it("should have player two's name", () => {
      expect(browser.text('#welcome')).to.include('Tom is noughts');
    });
  });

  after(function(done) {
    this.server.close(done);
  });
});
