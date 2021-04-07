/*
 Author: Nely Flores <nflores-ramirez@csumb.edu>
 Created: 5 April
 License: Public Domain
*/

$(".end-content")

$(".end-content").append("<button id='my-button'>Want to Win $3,000?? Press me</button>")

// find element set up an alert
$("#my-button").click(function(){
  alert("Its a Scam!!!!!!")
});

// change button to color green
$("#my-button").css("color","green");
