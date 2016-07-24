
var choice;
var opponent_choice;

var input_choice = function(selection){
	choice = selection;
}

//randomized bot choice
var opponent = function() {
    var opponent_selection = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //calling function for a random number between 1 and 3
    var opponent_random = opponent_selection(1,3)

    //matching random choice to selection
    if (opponent_random === 1) {
	    opponent_choice = 'rock';
    } else if (opponent_random === 2) {
	    opponent_choice = 'paper';
    } else {
	    opponent_choice = 'scissors';
    }
}
//setting defaults to 0
var wins = 0;
var losses = 0;
var draws = 0;

//determining winner based on choices
var game_outcome = function(){
	opponent();
	console.log("Your choice: ", choice, "Opponent's choice: ", opponent_choice);
  if (choice === 'rock' && opponent_choice === 'scissors' || choice === 'scissors' && opponent_choice === 'paper' || choice === 'paper' && opponent_choice === 'paper'){
	  wins++;
  } else if (choice === 'rock' && opponent_choice === 'paper' || choice === 'scissors' && opponent_choice === 'rock' || choice === 'paper' && opponent_choice === 'scissors'){
      losses++;
  } else {
	  draws++;
  }
  choice = undefined;
  opponent_choice = undefined;
  console.log(wins, losses, draws)
}

var startTimer = function() {
	var userMins = document.getElementById('mins').value;
	var userSecs = document.getElementById('secs').value;
	var userTime = (userMins * 60) + userSecs;
	console.log(userTime)
}