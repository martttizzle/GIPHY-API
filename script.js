

var buttons = ["WALKING","RUNNING","SKATEBOARD","ICE-SKATES","BICYCLES","HOVERBOARDS","SCOOTERS",
"MOTORCYCLES","CARS","TRUCKS","SEMI TRUCKS","TRAINS","AIRPLANES","BUILDINGS","NATURE"];

var apiKey = "VjA2J8r6s0BESVfnG7Wroz0zShvp2WGP";

var query ="https://api.giphy.com/v1/gifs/search?api_key=VjA2J8r6s0BESVfnG7Wroz0zShvp2WGP&q=bicycles+accidents&limit=25&offset=0&rating=R&lang=en";

            

$.ajax({
    url: query,
    method: "GET"
}).then(function(response) {

   console.log(response);

var results = response.data;
//$("#gif").html("<img src='" + results[3].images.fixed_height.url + "'>");

// console.log(results[i].images.fixed_height.url);


//Generate Buttons
for(var i = 0; i < buttons.length; i++) {
var button = $("<button>");
button.addClass("buttons");
button.text(buttons[i]);
button.attr("id", buttons[i]);
$("#buttons").append(button);
}

$(".buttons").on("click", function() {
    // alert("ok");
gifGenerator();
});


function gifGenerator() {
for ( var i = 0; i < 10; i++ ) {
var col = $("<div>");
col.attr("id", "col"+ i);
col.addClass("gif");
col.html("<img src='" + results[i].images.fixed_height.url + "'>");
$("#row1").append(col);

}
}



//for the final append

});



// var animalImage = $("<img>");
// // Setting the src attribute of the image to a property pulled off the result item
// animalImage.attr("src", results[i].images.fixed_height.url);

//  $("#gif1").html("<p>"+response.data[0].rating+"</p>");
//  $("#gif2").html("<p>"+response.data[0].url+"</p>");
/*  $("#gif3").html("<img src=" +response.data[0].fixed_height.url + ">");
 var a = response.data[0].fixed_height.url;
 document.write(a);*/

// // After the data from the AJAX request comes back
// .then(function(response) {

//     // Saving the image_original_url property
//       var imageUrl = response.data.image_original_url;

//       // Creating and storing an image tag
//       var catImage = $("<img>");

//       // Setting the catImage src attribute to imageUrl
//       catImage.attr("src", imageUrl);
//       catImage.attr("alt", "cat image");

//       // Prepending the catImage to the images div
//       $("#images").prepend(catImage);
//     });
// });
