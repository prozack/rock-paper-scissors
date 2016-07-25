
//rock paper scissors game logic begins
var choice;
var opponent_choice;

//player's selection
var inputChoice = function(selection){
	choice = selection;
}

//randomized bot choice
var opponent = function() {
    var opponentSelection = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //calling function for a random number between 1 and 3
    var opponentRandom = opponentSelection(1,3)

    //matching random choice to selection
    if (opponentRandom === 1) {
	    opponentChoice = 'rock';
    } else if (opponentRandom === 2) {
	    opponentChoice = 'paper';
    } else {
	    opponentChoice = 'scissors';
    }
}

//setting default scores to 0
var wins = 0;
var losses = 0;
var draws = 0;

//counter to ensure all results are tallied
var counter;

//determining winner based on choices
var gameOutcome = function(){
	opponent();
    document.getElementById("yourChoice").innerHTML = "You chose: " + choice;
    document.getElementById("botChoice").innerHTML = "Opponent chose: " + opponentChoice;
	console.log("Your choice: ", choice, "Opponent's choice: ", opponentChoice);
  if (choice === 'rock' && opponentChoice === 'scissors' || choice === 'scissors' && opponentChoice === 'paper' || choice === 'paper' && opponentChoice === 'rock'){
	  wins++;
	  //write to HTML with updated score
	  document.getElementById("htmlWins").innerHTML = "Wins: " + wins;
  } else if (choice === 'rock' && opponentChoice === 'paper' || choice === 'scissors' && opponentChoice === 'rock' || choice === 'paper' && opponentChoice === 'scissors'){
      losses++;
      document.getElementById("htmlLosses").innerHTML = "Losses: " + losses;
  } else {
	  draws++;
	  document.getElementById("htmlDraws").innerHTML = "Draws: " + draws;
  }
  //resetting variables after outcome determined
  choice = undefined;
  opponentChoice = undefined;
  counter = wins + losses + draws;
  console.log("wins: ", wins, "losses: ", losses, "draws: ", draws, "counter: ", counter);
}

//logic to determine winner, to be called when timer reaches zero
var endOfGame = function() {
	if (wins > losses) {
		return "You win!";
	} else if (wins < losses) {
		return "You lose!";
	} else {
		return "It's a draw!";
	}
}

//function called when restart button pressed, resets game assets to play new round
var clearValues = function(){
	wins = 0;
	losses = 0;
	draws = 0;
	document.getElementById("htmlWins").innerHTML = "Wins: " + wins;
	document.getElementById("htmlLosses").innerHTML = "Losses: " + losses;
	document.getElementById("htmlDraws").innerHTML = "Draws: " + draws;
	document.getElementById('displayMins').style.color = "#B2D23E";
    document.getElementById('displaySecs').style.color = "#B2D23E";
    document.getElementById('gameRock').removeAttribute('disabled'); 
    document.getElementById('gamePaper').removeAttribute('disabled'); 
    document.getElementById('gameScissors').removeAttribute('disabled'); 
}


