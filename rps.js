
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
//setting default scores to 0
var wins = 0;
var losses = 0;
var draws = 0;
//counter to ensure all results are tallied
var counter;

//determining winner based on choices
var game_outcome = function(){
	opponent();
	console.log("Your choice: ", choice, "Opponent's choice: ", opponent_choice);
  if (choice === 'rock' && opponent_choice === 'scissors' || choice === 'scissors' && opponent_choice === 'paper' || choice === 'paper' && opponent_choice === 'rock'){
	  wins++;
	  //write to HTML with updated score
	  document.getElementById("htmlWins").innerHTML = "Wins: " + wins;
  } else if (choice === 'rock' && opponent_choice === 'paper' || choice === 'scissors' && opponent_choice === 'rock' || choice === 'paper' && opponent_choice === 'scissors'){
      losses++;
      document.getElementById("htmlLosses").innerHTML = "Losses: " + losses;
  } else {
	  draws++;
	  document.getElementById("htmlDraws").innerHTML = "Draws: " + draws;
  }
  //resetting variables after outcome determined
  choice = undefined;
  opponent_choice = undefined;
  counter = wins + losses + draws;
  console.log("wins: ", wins, "losses: ", losses, "draws: ", draws, "counter: ", counter);
}

//logic to determine winner, to be called when timer reaches zero
var end_of_game = function() {
	if (wins > losses) {
		return "You win!";
	} else if (wins < losses) {
		return "You lose!"
	} else {
		return "It's a draw!"
	}
}

var startTimer = function() {
	var userMins = document.getElementById('mins').value;
	var userSecs = document.getElementById('secs').value;
	var userTime = (userMins * 60) + userSecs;
	console.log(userTime)
}