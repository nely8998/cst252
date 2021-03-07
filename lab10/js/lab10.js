/*
 Author: Nely Flores <nflores-ramirez@csumb.edu>
 Created: 8 March
 License: Public Domain
*/

// Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("output");
    console.log("outputEl: ", outputEl);

// Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("p");


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
