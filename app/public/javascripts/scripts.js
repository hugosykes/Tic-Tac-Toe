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

});
