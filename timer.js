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

    // rewrite data in form fields to be sure that the fields for minutes and seconds contain integer number
    document.getElementById('mins').value = userMins;
    document.getElementById('secs').value = userSecs;
    startCount = 1;
    document.getElementById('startButton').setAttribute('disabled', 'disabled');     // disable the button
  }

  // if minutes and seconds are 0, enables start button
  if (userMins === 0 && userSecs === 0) {
    startCount = 0;
    document.getElementById('startButton').removeAttribute('disabled'); 
    //changes start button to restart game when first game ends 
    document.getElementById('startButton').setAttribute('value', 'Restart');
    //runs end of game calculation when timer reaches 0
    alert(endOfGame());
    //return false to prevent timer reset
    return false;
  }

  //alert at 10 seconds 
  else if (userMins === 0 && userSecs === 10) {
    console.log("10 seconds left!");
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

