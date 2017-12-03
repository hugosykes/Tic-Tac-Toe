'use strict';

Browser.localhost('tic-tac-toe.com', 3001);

describe('Playing', function() {
  const browser = new Browser();

  before(function(done) {
    this.server = http.createServer(app).listen(3001);
    browser.visit('/', done);
  });

  before(function(done) {
    browser
      .fill('#player-name', 'Hugo')
      .pressButton('#name-submit');
    browser
      .fill('#player-name', 'Tom')
      .pressButton('#name-submit', done);
  });
  
  describe('clicking boxes', () => {
    it("should change box one from empty to X", () => {
      browser.pressButton('#one');
      expect(browser.text('#one')).to.equal('X');
    });

    it("should change box two from empty to O", () => {
      browser.pressButton('#two');
      expect(browser.text('#two')).to.equal('O');
    });

    it("should change box three from empty to X", () => {
      browser.pressButton('#three');
      expect(browser.text('#three')).to.equal('X');
    });

    it("should change box four from empty to O", () => {
      browser.pressButton('#four');
      expect(browser.text('#four')).to.equal('O');
    });

    it("should change box five from empty to X", () => {
      browser.pressButton('#five');
      expect(browser.text('#five')).to.equal('X');
    });

    it("should change box six from empty to O", () => {
      browser.pressButton('#six');
      expect(browser.text('#six')).to.equal('O');
    });

    it("should change box seven from empty to X", () => {
      browser.pressButton('#seven');
      expect(browser.text('#seven')).to.equal('X');
    });

    it("should change box eight from empty to O", () => {
      browser.pressButton('#eight');
      expect(browser.text('#eight')).to.equal('O');
    });

    it("should change box nine from empty to X", () => {
      browser.pressButton('#nine');
      expect(browser.text('#nine')).to.equal('X');
    });
  });

  after(function(done) {
    this.server.close(done);
  });
});
