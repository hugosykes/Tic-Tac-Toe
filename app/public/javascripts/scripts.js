$(document).ready(function() {
  var game = new Game();
  var nameTicker = 1;

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
  }

  $('#one').click(() => {
    game.move(1, game.whosTurn());
    update();
  });
  
  $('#two').click(() => {
    game.move(2, game.whosTurn());
    update();
  });
  
  $('#three').click(() => {
    game.move(3, game.whosTurn());
    update();
  });
  
  $('#four').click(() => {
    game.move(4, game.whosTurn());
    update();
  });
  
  $('#five').click(() => {
    game.move(5, game.whosTurn());
    update();
  });
  
  $('#six').click(() => {
    game.move(6, game.whosTurn());
    update();
  });
  
  $('#seven').click(() => {
    game.move(7, game.whosTurn());
    update();
  });
  
  $('#eight').click(() => {
    game.move(8, game.whosTurn());
    update();
  });
  
  $('#nine').click(() => {
    game.move(9, game.whosTurn());
    update();
  });
});
