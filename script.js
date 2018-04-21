

var buttons = ["WALKING", "RUNNING", "SKATEBOARD", "SNOWBOARDS", "BICYCLES", "HOVERBOARDS", "SCOOTERS",
    "MOTORCYCLES", "CARS", "TRUCKS", "SEMI TRUCKS", "TRAINS", "AIRPLANES", "BUILDINGS", "NATURAL"];

var apiKey = "VjA2J8r6s0BESVfnG7Wroz0zShvp2WGP";

//Generate Buttons
for (var i = 0; i < buttons.length; i++) {
    var button = $("<button>");
    button.addClass("buttons");
    button.text(buttons[i]);
    button.attr("id", buttons[i]);
    $("#buttons").append(button);
}
// $("#inpt").on("click", function(event){
//     event.preventDefault();
//    // var a = $("#inpt").val();
//     alert(a);
// });

$("button").on("click", function () {
    var type = $(this).attr("id");

    if (this) {
        $("#row1").empty();
    }

    var query = "https://api.giphy.com/v1/gifs/search?api_key=VjA2J8r6s0BESVfnG7Wroz0zShvp2WGP&q=" + type + "+crash&limit=10&offset=0&rating=R&lang=en";

    $.ajax({
        url: query,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        gifGenerator(results);

        function gifGenerator(results) {
            for (var i = 0; i < 10; i++) {
                var col = $("<div>");
                col.addClass("gif");
                var p = $("<p>").text("Rating: " + results[i].rating);
                col.html("<img data-state='still' data-still='" + results[i].images.fixed_height_still.url + "'" + "data-animate='" + results[i].images.fixed_height.url + "'" + "class='abc'" + "src='" + results[i].images.fixed_height_still.url + "'>");
                col.prepend(p);
                $("#row1").append(col);
            }
        }
       
        $(".abc").on("click", function () {

            var state = $(this).attr("data-state");
            if (state === "still") {
                console.log(this);

                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }

        });

    });

});

