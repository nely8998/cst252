/*
 Author: Nely Flores <nflores-ramirez@csumb.edu>
 Created: 27 Feburary
 License: Public Domain
*/
var outputEl = document.getElementById("output");

function isEven(x){
  return (x % 2 == 0);
}

//test function
console.log("Is 4 even? ", isEven(1));
console.log("Is 9 even? ", isEven(2));

array = [25, 500, 550, 50, 650, 750]
console.log("my array", array);
// add array to document
var newEl = document.createElement("p");
newEl.innerHTML = "Original array:" + JSON.stringify(array);
outputEl.appendChild(newEl);

var result = array.map(isEven);
// should return [false, true, true, true, true, true]
console.log("test of eveness of array", result);
// add array to document
var newEl = document.createElement("p");
newEl.innerHTML = "Original array:" + JSON.stringify(array);
outputEl.appendChild(newEl);

var result = array.map(function(x){
  return x ** 0.5;
})
//add array to document
var newEl = document.createElement("p");
newEl.innerHTML = "Original array:" + JSON.stringify(array);
outputEl.appendChild(newEl);

//should return (6) [5, 22.360679774997898, 23.45207879911715, 7.0710678118654755, 25.495097567963924, 27.386127875258307]
console.log("Squareroot of array:", result);
