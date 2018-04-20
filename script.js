

var buttons = ["WALKING","RUNNING","SKATEBOARD","ICESKATES","BICYCLES","HOVERBOARDS","SCOOTERS",
"MOTORCYCLES","CARS","TRUCKS","SEMI TRUCKS","TRAINS","AIRPLANES","BUILDINGS","NATURAL"];

var apiKey = "VjA2J8r6s0BESVfnG7Wroz0zShvp2WGP";
    
//Generate Buttons
for (var i = 0; i < buttons.length; i++) {
    var button = $("<button>");
    button.addClass("buttons");
    button.text(buttons[i]);
    button.attr("id", buttons[i]);
    $("#buttons").append(button);
    }
    

$("button").on("click", function() {
    var type = $(this).attr("id");
    console.log(type); 

var query ="https://api.giphy.com/v1/gifs/search?api_key=VjA2J8r6s0BESVfnG7Wroz0zShvp2WGP&q=" +type+ "+crash&limit=25&offset=0&rating=R&lang=en";
console.log(query);

$.ajax({
    url: query,
    method: "GET"
}).then(function(response) {
    console.log(response);
    var results = response.data;
    gifGenerator(results);

function gifGenerator(results) {
for ( var i = 0; i < 10; i++ ) {
var col = $("<div>");
col.attr("id", "col"+ i);
col.addClass("gif");
col.html("<img src='" + results[i].images.fixed_height.url + "'>");
$("#row1").append(col);

  }
}

 });

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

    // Adding click event listen listener to all buttons
    // $("button").on("click", function() {
    //   // Grabbing and storing the data-animal property value from the button
    //   var animal = $(this).attr("data-animal");
     
    //   // Constructing a queryURL using the animal name
    //   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //     animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    //   // Performing an AJAX request with the queryURL
    //   $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   })
    //     // After data comes back from the request
    //     .then(function(response) {
    //       console.log(queryURL);

    //       console.log(response);
    //       // storing the data from the AJAX request in the results variable
    //       var results = response.data;
    //       console.log(results , "results here");

    //       // Looping through each result item

    //       for (var i = 0; i < results.length; i++) {

    //         // Creating and storing a div tag
    //         var animalDiv = $("<div>");

    //         // Creating a paragraph tag with the result item's rating
    //         var p = $("<p>").text("Rating: " + results[i].rating);

    //         // Creating and storing an image tag
    //         var animalImage = $("<img>");
    //         // Setting the src attribute of the image to a property pulled off the result item
    //         animalImage.attr("src", results[i].images.fixed_height.url);

    //         // Appending the paragraph and image tag to the animalDiv
    //         animalDiv.prepend(p);
    //         animalDiv.append(animalImage);

    //         // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
    //         $("#gifs-appear-here").prepend(animalDiv);
    //       }

    //     });
    // });
  
  