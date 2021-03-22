/*
 Author: Nely Flores <nflores-ramirez@csumb.edu>
 Created: 22 March
 License: Public Domain
*/

// Create a constructor for vehicles called Vehicle, including make, model, year, color, and extras.
// Add a method info() to your constructor that neatly returns a string with all that information
function Vehicle(make, model, year, color, extras) {
  this.make = first;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  this.info = function() {
    return  " my first car " + " " + " was a " + this.make + " " + this.model + " " + this.year + " " + " it's alright! ";
  }
  }

// Instantiate objects with your constructor for every vehicle you've ever owned:
 var first = (new Vehicle("Toyota", "Highlander", 2016, "blue", "Brookes saddle"));



// we add text (including <p> tags to the end of our output div
document.getElementById("output").innerHTML += "<p>" + first.info() + "</p>";
