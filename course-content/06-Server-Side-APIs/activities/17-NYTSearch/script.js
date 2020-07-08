$(document).ready(function () {
    console.log("We made it!");

    $(".searchBtn").on("click", function () {
        console.log("we really made it");
        // var searchTerm = $("#search-term").val().trim();
        // console.log(searchTerm);
        // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=4ndD9V8D4vyX2Ij6vAx9FihDS2YlScYP"

        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // })
        //     .then(function (response) {
        //         console.log(response)
        //         var results = response.data;

        //         for (var i = 0; i < results.length; i++) {
        //             var gifDiv = $("<div>");

        //             var rating = results[i].rating;

        //             var p = $("<p>").text("Rating: " + rating);

        //             var personImage = $("<img>");
        //             personImage.attr("src", results[i].images.fixed_height.url);

        //             gifDiv.prepend(p);
        //             gifDiv.prepend(personImage);

        //             $("#gifs-appear-here").prepend(gifDiv);
        //         }
        //     });
    });
});