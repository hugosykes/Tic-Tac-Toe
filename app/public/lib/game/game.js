'use strict';
(function(exports) {
  exports.Game = function() {
    var _player1 = 'Player 1';
    var _player2 = 'Player 2';
    var _grid = new Grid();
    var _turn = 0;
    var _winner = '';

    function box(index) {
      if (_grid.boxState(index) !== 'empty') return _grid.boxState(index);
      return '';
    }

    function gameOver(winner) {
      _winner = winner;
    }

    function move(boxIndex, value = whosTurn()) {
      _turn += 1;
      _grid.setBoxState(boxIndex, value);
    }

    function player(player) {
      if (player === 1) return _player1;
      if (player === 2) return _player2;
    }

    function reset() {
      _grid = new Grid();
      _player1 = 'Player 1';
      _player2 = 'Player 2';
      _turn = 0;
      _winner = '';
    }

    function setPlayer(playerNumber, playerName) {
      if (playerNumber === 1) _player1 = playerName;
      if (playerNumber === 2) _player2 = playerName;
    }

    function whosTurn() {
      return ((_turn % 2) === 0) ? 'X' : 'O';
    }

    function winner() {
      return _winner;
    }
    
    return {
      box: box,
      gameOver: gameOver,
      move: move,
      player: player,
      reset: reset,
      setPlayer: setPlayer,
      whosTurn: whosTurn,
      winner: winner
    };
  };
})(this)