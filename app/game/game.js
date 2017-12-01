'use strict';
(function(exports) {
  exports.Game = function() {
    var _player1 = 'Player 1';
    var _player2 = 'Player 2';

    function player(player) {
      if (player === 1) return _player1;
      if (player === 2) return _player2;
    }

    function setPlayer(playerNumber, playerName) {
      if (playerNumber === 1) _player1 = playerName;
      if (playerNumber === 2) _player2 = playerName;
    }
    
    return {
      player: player,
      setPlayer: setPlayer
    };
  };
})(this)