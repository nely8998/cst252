/*
 Author: Nely Flores <nflores-ramirez@csumb.edu>
 Created: 30 March
 License: Public Domain
*/

class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  info() {
    return " my first car " + " " + " was a " + this.make + " " + this.model + " " + this.year + " " + " it's alright! ";
  }
}

let myCar = new Car("Toyota", "Highlander", 2016, "blue");
document.getElementById("output").innerHTML= myCar.info();
