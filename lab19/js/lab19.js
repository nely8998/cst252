/*
 Author: Nely Flores <nflores-ramirez@csumb.edu>
 Created: 17 April
 License: Public Domain
*/

URL = "https://api.nasa.gov/planetary/apod"

// attach click action to button
$('#activate').click(function(){
    // get data via ajax from numbersapi
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (ENDPOINT)
        url: "https://api.nasa.gov/planetary/apod?api_key=HKrf80gEoC7yzzWQ1JkB5UsPjl10IdWstY7pwXmD",
        // The data to send (will be converted to a query string)
        // data: { id: 123},
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        // dataType : "json",
    })
    // If the request succeeds
    .done(function(data) {
        console.log(data);
        // put data in webpage
        // $("#output").append("<p>" + JSON.stringify(data));
        // $("#output").append("<p>Here's what you should do when you are bored: <b>" + data.activity);
        // $("#output").append("<p>President-elect Kanye says: <b>" + data.quote);
          $("#output").html('<img src="https://apod.nasa.gov/apod/image/2104/GravityWaves_Claro_960.jpg" height="200px" width="200px">');
          $("#output").append("<p>This is the output: <b>" + data.explanation);


    })
});
