/*
 Author: Nely Flores <nflores-ramirez@csumb.edu>
 Created: 30 March
 License: Public Domain
*/

// create a class wiht make,model, year, and color
class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  // return the using info()
  info() {
    return " my first car " + " " + " was a " + this.make + " " + this.model + " " + this.year + " " + " it's alright! ";
  }
}
// reference it to show on innerHTML
let myCar = new Car("Toyota", "Highlander", 2016, "blue");
document.getElementById("output").innerHTML= myCar.info();


// Peesuado Coding for HangMAN
  //  Create 2 players
  // Start guessing a letter
    // If the letter is correct move on
      // if the letter is wrong make an X show up on screen
      // if right move on to next leve;
        // repeat
