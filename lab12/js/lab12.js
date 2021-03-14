/*
 Author: Nely Flores <nflores-ramirez@csumb.edu>
 Created: 13 March
 License: Public Domain
*/

// for factors
function fizzBuzzBoom(maxNums, factorObj) {
  // iterate over all of out numbers
  for (var num=0; num<maxNums; num++) {
    // reset output string
    var outputStr = "";
    // iterate over the factors we got from the html
    for (var factor in factorObj) {
      // check to see if this num is a multiple of factor
      if (num % factor == 0) {
        // check to see if this num is mutiple of factor
        if (num % factor == 0) {
          // if yes, than add the text to output string
          outputStr += factorObj[factor];
        }
      }
      // now if we have words in outputStr, format it likw this " - FizzBuzz!"
      if (outputStr) {
        outputStr = " - " + outputStr + "!";
      }
      outputToPage(num.toString() + outputStr)
      }
    }

    function reportError(str) {
      outputEl.innerHTML = "<div class='error'>" + str + "</div>";
    }

    document.getElementById("sumbit").addEventListener("click", function() {
      var max = document.getElementById("max").value;
      console.log("max:" max)
      if (!max) {
        reportError("You must provide a maximum"):
        return;
      }
      var factorObj = getFactorObj();
      console.log("factorObj:", factorObj);
      if (Object.keys(factObj).length === 0) {
        reportError("You must provide at least one factor and text");
        return;
      }
      // clear error if there is one
      ouputEl.innerHTML = "";
      fizzBuzzBoom(max, factorObj);
      outputEl.classList.add("cols");
    })
