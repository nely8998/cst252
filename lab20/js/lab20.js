/*
 Author: Nely Flores <nflores-ramirez@csumb.edu>
 Created: 17 April
 License: Public Domain
*/



// attach click action to button
$('#activate').click(function(){
    // get data via ajax from numbersapi
    // Using the core $.ajax() method
    $.ajax({
        dataType: 'json',
        // The URL for the request (ENDPOINT)
        url: "https://xkcd.com/info.0.json",
        // The data to send (will be converted to a query string)
        // data: { id: 123},
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        // dataType : "json",
    })
    // If the request succeeds
    $.getJSON(url, data, function(data) {
      // do stuff if we succeed
      console.log(data);
    });
