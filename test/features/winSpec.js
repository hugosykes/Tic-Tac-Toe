'use strict';

Browser.localhost('tic-tac-toe.com', 3001);

describe('Winning', function() {
  const browser = new Browser();

  beforeEach(function(done) {
    this.server = http.createServer(app).listen(3001);
    browser.visit('/', done);
  });

  beforeEach(function(done) {
    browser
      .fill('#player-name', 'Hugo')
      .pressButton('#name-submit');
    browser
      .fill('#player-name', 'Tom')
      .pressButton('#name-submit', done);
  });
  
  describe('A player wins!', () => {
    it("should report that crosses have won", () => {
      browser.pressButton('#one');
      browser.pressButton('#four');
      browser.pressButton('#three');
      browser.pressButton('#five');
      browser.pressButton('#two');
      expect(browser.text('#welcome')).to.include('Hugo has won!');
    });

    it("should report that crosses have won", () => {
      browser.pressButton('#one');
      browser.pressButton('#two');
      browser.pressButton('#four');
      browser.pressButton('#three');
      browser.pressButton('#seven');
      expect(browser.text('#welcome')).to.include('Hugo has won!');
    });

    it("should report that crosses have won", () => {
      browser.pressButton('#one');
      browser.pressButton('#two');
      browser.pressButton('#five');
      browser.pressButton('#three');
      browser.pressButton('#nine');
      expect(browser.text('#welcome')).to.include('Hugo has won!');
    });

    it("should report that crosses have won", () => {
      browser.pressButton('#three');
      browser.pressButton('#two');
      browser.pressButton('#five');
      browser.pressButton('#four');
      browser.pressButton('#seven');
      expect(browser.text('#welcome')).to.include('Hugo has won!');
    });
  });

  describe('Reset button', () => {
    it('should show the reset button when somebody has won', () => {
      browser.pressButton('#three');
      browser.pressButton('#two');
      browser.pressButton('#five');
      browser.pressButton('#four');
      browser.pressButton('#seven');
      expect(browser.text('#reset')).to.include('Reset game');
    });

    it('should reset game when reset button is clicked', () => {
      browser.pressButton('#three');
      browser.pressButton('#two');
      browser.pressButton('#five');
      browser.pressButton('#four');
      browser.pressButton('#seven');
      browser.pressButton('#resetButton');
      ['#one', '#two', '#three', '#four', '#five', '#six', '#seven', '#eight', '#nine'].forEach((button) => {
        expect(browser.text(button)).to.equal('');
      });
    });
  });

  afterEach(function(done) {
    this.server.close(done);
  });
});
