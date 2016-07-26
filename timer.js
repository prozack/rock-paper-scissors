//timer 
var userMins = 0;
var userSecs = 0;
var startCount = 0;       // used to control when to read data from form

function startTimer() {
  // if $startchr is 0, and form fields exists, gets data for minutes and seconds, and sets $startchr to 1
  if (startCount == 0 && document.getElementById('mins') && document.getElementById('secs')) {
    // makes sure the script uses integer numbers
    userMins = parseInt(document.getElementById('mins').value);
    userSecs = parseInt(document.getElementById('secs').value);

    // ensures value from form is a number
    if (isNaN(userMins)) userMins = 0;
    if (isNaN(userSecs)) userSecs = 0;
    
    //if seconds input is larger than a minute
    if (userSecs > 60) {
    	userSecs -= 60;
    	userMins += 1;
    }

    // rewrite data in form fields to be sure that the fields for minutes and seconds contain integer number
    document.getElementById('mins').value = userMins;
    document.getElementById('secs').value = userSecs;
    startCount = 1;

    //toggles start button to disabled and enable all game buttons
    document.getElementById('startButton').setAttribute('disabled', 'disabled');     
    document.getElementById('gameRock').removeAttribute('disabled'); 
    document.getElementById('gamePaper').removeAttribute('disabled'); 
    document.getElementById('gameScissors').removeAttribute('disabled'); 
  }

  // if minutes and seconds are 0, enables start button
  if (userMins === 0 && userSecs === 0) {
    startCount = 0;
    document.getElementById('startButton').removeAttribute('disabled'); 
    //changes start button to restart game when first game ends 
    document.getElementById('startButton').setAttribute('value', 'Restart');
    //runs end of game calculation when timer reaches 0
    var outcome = (endOfGame());
    document.getElementById('result').innerHTML = outcome;
    //disables game buttons 
    document.getElementById('gameRock').setAttribute('disabled', 'disabled'); 
    document.getElementById('gamePaper').setAttribute('disabled', 'disabled'); 
    document.getElementById('gameScissors').setAttribute('disabled', 'disabled'); 
    //return false to prevent timer reset and countdown
    return false;
  }

  //alert at 10 seconds 
  else if (userMins === 0 && userSecs === 10) {
    console.log("10 seconds left!");
    document.getElementById('displayMins').style.color = "red";
    document.getElementById('displaySecs').style.color = "red";
    //decrease seconds to continue countdown
    userSecs--;
  } else {
    // decrease seconds, and decrease minutes if seconds reach to 0
    userSecs--;
    if (userSecs < 0) {
      if (userMins > 0) {
        userSecs = 59;
        userMins--;
      } else {
        userSecs = 0;
        userMins = 0;
      }
    }
  }
  
  //formats minutes and seconds for countdown timer
  var padDecimal = function(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }

  // display the time in page, and auto-calls this function after 1 seccond
  document.getElementById('displayMins').innerHTML = padDecimal(userMins);
  document.getElementById('displaySecs').innerHTML = padDecimal(userSecs);
  setTimeout('startTimer()', 1000);
}

