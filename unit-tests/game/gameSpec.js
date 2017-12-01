'use strict'
describe('Game', function() {
  var game;

  beforeEach(() => {
    game = new Game();
  });

  describe('Players', () => {
    describe('returning names', () => {
      it('should have Player 1 with a name', () => {
        expect(game.player(1)).toBe('Player 1');
      });  
      
      it('should have Player 2 with a name', () => {
        expect(game.player(2)).toBe('Player 2');
      });
    });

    describe('setting names', () => {
      it("should be able to set player 1's name", () => {
        game.setPlayer(1, 'Hugo');
        expect(game.player(1)).toBe('Hugo');
      });

      it("should be able to set player 2's name", () => {
        game.setPlayer(2, 'Tom');
        expect(game.player(2)).toBe('Tom');
      });
    });
  });

  
});