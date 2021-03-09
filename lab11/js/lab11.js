/*
 Author: Nely Flores <nflores-ramirez@csumb.edu>
 Created: 10 March
 License: Public Domain
*/

// depending 4
function sortingHat(str) {
len = str.length;
mod = len % 4;
if (mod == 0) {
  return "Gryffindor"
}
else if (mod == 1) {
  return "Ravenclaw"
}
else if (mod === 2) {
  return "Slytherin"
}
else if (mod == 3) {
  return "Hufflepuff"
}
}

// add a button
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  // grt value from input field
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The sorting Hat has sorted you into" + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
