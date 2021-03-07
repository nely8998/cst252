/*
 Author: Nely Flores <nflores-ramirez@csumb.edu>
 Created: 8 March
 License: Public Domain
*/

function sortUserName(){
  var button = document.getElementById('my-button');
}

// fin the button element
buttonEl = document.getElementById("my-button");
console.log("button element:", buttonEl);

// find the form element
inputEl = document.getElementById("user-name");
console.log("input element:", inputEl);

// find output element
outputEl = document.getElementById("output");
console.log("output element:", outputEl);

// add an eveent listener to button
buttonEl.addEventListener("click", function(){
    // get value from name element
    var userName = inputEl.value;
    // modify value sor
    var newName = toTitleCase(reorderUserName(userName));
    // put value in output elements
    outputEl.innerHTML = "<p id=name-results>" + newName "</p>";
});
