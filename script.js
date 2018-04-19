var query = "https://api.giphy.com/v1/gifs/search?api_key=VjA2J8r6s0BESVfnG7Wroz0zShvp2WGP&q=cat&limit=10&offset=0&rating=G&lang=en";

$.ajax({
    url: query,
    method: "GET"
}).then(function(response){

    console.log(response);

//  $("#gif1").html("<p>"+response.data[0].rating+"</p>");
//  $("#gif2").html("<p>"+response.data[0].url+"</p>");
 $("#gif3").html("<img src=" +response.data[0].fixed_height.url + ">");
 var a = response.data[0].fixed_height.url;
 document.write(a);
});






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
