// 'use strict';

// Browser.localhost('tic-tac-toe.com', 3001);

// describe('Winning', function() {
//   const browser = new Browser();

//   before(function(done) {
//     this.server = http.createServer(app).listen(3001);
//     browser.visit('/', done);
//   });

//   before(function(done) {
//     browser
//       .fill('#player-name', 'Hugo')
//       .pressButton('#name-submit');
//     browser
//       .fill('#player-name', 'Tom')
//       .pressButton('#name-submit', done);
//   });
  
//   describe('A player wins!', () => {
//     it("should report that crosses have won", () => {
//       browser.pressButton('#one');
//       browser.pressButton('#two');
//       browser.pressButton('#four');
//       browser.pressButton('#three');
//       browser.pressButton('#seven');
//       expect(browser.text('#welcome')).to.include('Hugo has won!');
//     });

//     it("should report that crosses have won", () => {
//       browser.pressButton('#one');
//       browser.pressButton('#four');
//       browser.pressButton('#three');
//       browser.pressButton('#five');
//       browser.pressButton('#three');
//       expect(browser.text('#welcome')).to.include('Hugo has won!');
//     });

//     it("should report that crosses have won", () => {
//       browser.pressButton('#one');
//       browser.pressButton('#two');
//       browser.pressButton('#five');
//       browser.pressButton('#three');
//       browser.pressButton('#nine');
//       expect(browser.text('#welcome')).to.include('Hugo has won!');
//     });

//     it("should report that crosses have won", () => {
//       browser.pressButton('#three');
//       browser.pressButton('#two');
//       browser.pressButton('#five');
//       browser.pressButton('#four');
//       browser.pressButton('#seven');
//       expect(browser.text('#welcome')).to.include('Hugo has won!');
//     });
//   });

//   after(function(done) {
//     this.server.close(done);
//   });
// });
