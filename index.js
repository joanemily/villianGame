
const password = () => 
{
//check to see if password typed in is correct
var pwValue = document.getElementById("password").value;
if (pwValue != 'LifeIsVile2021' || pwValue == null) {
//if incorrect, hide #login page and show #error page
document.getElementById("login").style.visibility = 'hidden';
document.getElementById("error").style.visibility = 'visible';
var glitch = document.getElementsByClassName("glitch");
glitch.pseudoStyle("before", "animation", "glitch .3s cubic-bezier(.25, .46, .45, .94) both 5");
glitch.pseudoStyle("after", "animation", "glitch .3s cubic-bezier(.25, .46, .45, .94) reverse both 5");
}
else if (pwValue == 'LifeIsVile2021') {
//if correct, hide #login page and show #success page
document.getElementById("login").style.visibility = 'hidden';
document.getElementById("countdown").style.visibility = 'hidden';
document.getElementById("success").style.visibility = 'visible';
}

}

login = () => 
{
document.getElementById("error").style.visibility = 'hidden';
document.getElementById("login").style.visibility = 'visible';

}

var minutes = 30;

var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
var time_limit = ((minutes * 60 ) * 1000);
//set actual timer
setTimeout(
  function() 
  {
    alert( 'done' );
  }, time_limit );

var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;
  
if ( seconds_left >= 0 ) {
  console.log(time_limit);
   if ( (seconds_left * 1000 ) < ( time_limit / 2 ) )  {
     $( '#tiles' ).removeClass('color-full');
     $( '#tiles' ).addClass('color-half');

		} 
    if ( (seconds_left * 1000 ) < ( time_limit / 4 ) )  {
    	$( '#tiles' ).removeClass('color-half');
    	$( '#tiles' ).addClass('color-empty');
    }
  
	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>"; 
  

  
    }
    else if (seconds_left == 0) {
        document.getElementById("countdown").style.visibility = 'hidden';

    }
   
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

