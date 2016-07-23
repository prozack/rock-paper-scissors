
var choice;
var opponent_choice;

//randomized bot choice
var opponent_selection = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//calling function for a random number between 1 and 3
opponent_selection(1,3)

//matching random choice to selection
if (opponent === 1) {
	opponent_choice = 'rock';
} else if (opponent === 2) {
	opponent_choice = 'paper';
} else {
	opponent_choice = 'scissors';
}

var wins = 0;
var losses = 0;
var draws = 0;

if (choice === 'rock' && opponent_choice === 'scissors' || choice === 'scissors' && opponent_choice === 'paper' || choice === 'paper' && opponent_choice === 'paper'){
	wins++;
} else if (choice === 'rock' && opponent_choice === 'paper' || choice === 'scissors' && opponent_choice === 'rock' || choice === 'paper' && opponent_choice === 'scissors'){
    losses++;
} else {
	draws++;
}

var startTimer = function() {
	var userMins = document.getElementById('mins').value;
	var userSecs = document.getElementById('secs').value;
	var userTime = (userMins * 60) + userSecs;
	console.log(userTime)
}