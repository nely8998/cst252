/*
 Author: Nely Flores <nflores-ramirez@csumb.edu>
 Created: 17 April
 License: Public Domain
*/



// attach click action to button
$.ajax({
    url: "https://xkcd.com/info.0.json",
    method: "GET",
    success: function(data){
        console.log(data);
        $("h3").html(data.title);
        $("#headshot").attr("src", data.img);
        $("#education").html(data.alt);
    }
})
