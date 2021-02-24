/*
 Author: Nely Flores <nflores-ramirez@csumb.edu>
 Created: 23 Feburary
 License: Public Domain
*/

// of their name
function sortUserName() {
  var userName = window.prompt("HI. Please tell me your name so I can fix it.");
  console.log("userName =", userName);
  // split tring to arrayy
  var nameArray = userName.split('');
  console.log("nameArrar =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nammeArraySort =", nameArraySort);
  // join array back to string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

// output
document.writeln("Oh hey, I've fixed your name: ",
  sortUserName(), "</br>");
