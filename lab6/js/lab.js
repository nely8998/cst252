/*
 Author: Nely Flores <nflores-ramirez@csumb.edu>
 Created: 11 Feburary
 License: Public Domain
*/

// Define Variables
myTransport = ["driving", "walking", "biking", "running"];

myMainRide = {
  make: "Toyota",
  model : "Highlander",
  color : "Blue",
  year : 2016,
  age : function() {
    return 2021 - age;
  }
}

// Output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
document.writeln("The age of my ", myMainRide.model, " is ", myMainRide.age(), " years.");
