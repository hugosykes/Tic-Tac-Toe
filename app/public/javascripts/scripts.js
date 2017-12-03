$(document).ready(function() {
  var game = new Game();
  var nameTicker = 1;

  function gameOver(winner) {
    if (winner === 'X') winner = game.player(1);
    if (winner === 'O') winner = game.player(2);
    game.gameOver(winner);
    $('#welcome').text(game.winner() + " has won!");
    $('#reset').html("<button id='resetButton'>Reset game</button>");
  }

  function update() {
    $('#one').text(game.box(1));
    $('#two').text(game.box(2));
    $('#three').text(game.box(3));
    $('#four').text(game.box(4));
    $('#five').text(game.box(5));
    $('#six').text(game.box(6));
    $('#seven').text(game.box(7));
    $('#eight').text(game.box(8));
    $('#nine').text(game.box(9));
    checkForVictory();
  }

  function checkForVictory() {
    [1,4,7].forEach((i) => {
      if ((!!game.box(i)) && (game.box(i) === game.box(i + 1)) && (game.box(i + 1) === game.box(i + 2))) { gameOver(game.box(i)); }
    });

    [1,2,3].forEach((i) => {
      if ((!!game.box(i)) && (game.box(i) === game.box(i + 3)) && (game.box(i + 3) === game.box(i + 6))) { gameOver(game.box(i)); }
    });

    if ((!!game.box(1)) && (game.box(1) === game.box(5)) && (game.box(5) === game.box(9))) { gameOver(game.box(1)); }
    if ((!!game.box(3)) && (game.box(3) === game.box(5)) && (game.box(5) === game.box(7))) { gameOver(game.box(3)); }
  }

  $('#container').html("<scan id='message'>Enter player one's name: </scan><input type='text' id='player-name'></input><button id='name-submit'>Submit</button>");
  
  $('#name-submit').click(() => {
    game.setPlayer(nameTicker, $('#player-name').val());
    $('#message').text("Enter player two's name: ");
    $('#player-name').val('');
    nameTicker += 1;
    if (nameTicker === 3) {
      $('#container').html("<div id='welcome'>"+ game.player(1) + " is crosses and "+ game.player(2) + " is noughts. "+ game.player(1) + " goes first!</div>");
    }
  });

  $('#reset').click(() => {
    game.reset();
    update();
    $('#reset').html('');
  });

  $('#one').click(() => {
    game.move(1);
    update();
  });
  
  $('#two').click(() => {
    game.move(2);
    update();
  });
  
  $('#three').click(() => {
    game.move(3);
    update();
  });
  
  $('#four').click(() => {
    game.move(4);
    update();
  });
  
  $('#five').click(() => {
    game.move(5);
    update();
  });
  
  $('#six').click(() => {
    game.move(6);
    update();
  });
  
  $('#seven').click(() => {
    game.move(7);
    update();
  });
  
  $('#eight').click(() => {
    game.move(8);
    update();
  });
  
  $('#nine').click(() => {
    game.move(9);
    update();
  });
});
