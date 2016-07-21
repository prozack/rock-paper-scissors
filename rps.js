
var choice;
var opponent_choice ;

var opponent = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

opponent(1,3)

if (opponent === 1) {
	opponent_choice = 'rock';
} else if (opponent === 2) {
	opponent_choice = 'paper';
} else {
	opponent_choice = 'scissors';
}