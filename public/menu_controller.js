function searchRestaurant(restaurant) {

  // Querying the openmenu api for the selected artist
  var queryURL = "https://openmenu.com/api/v2/search.php?key=fbadc01d-5338-11e8-8dcc-525400552a35&s=" + restaurant + "&postal_code=66213&city=overland+park&country=us";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    //api documentation is wrapped in an object so a var has to be created in order to dig deeper into the object


    var dig = response;
    // Printing the entire object to console
    console.log(dig.response);

    // Constructing HTML containing the restaurant information
    $("#title").text(dig.response.result.restaurants[0].restaurant_name);
    $("#description").text(dig.response.result.restaurants[0].brief_description);
    $("#dish").text(dig.response.result.menus[0].items[0].menu_item_name);
    $("#itemDescription").text(dig.response.result.menus[0].items[0].menu_item_description);
    $("#website").attr("href", dig.response.result.restaurants[0].website_url).text(restaurant + "'s Website");
  });
}

// Event handler for user clicking the findRestaurant button
$("#findRestaurant").on("click", function (event) {
  // Preventing the button from trying to submit the form
  event.preventDefault();
  // Storing the restaurant name
  var inputRestaurant = $("#searchRestaurant").val().trim();

  // Running the search Restaurant function (passing in the restaurant as an argument)
  searchRestaurant(inputRestaurant);
});

$(".favorite").click(function (event) {
  menu = {
    restaurant: $("#title").text(),
    description: $("#description").text(),
    dish: $("#dish").text(),
    itemDescription: $("#itemDescription").text(),
    website: $("#website").text(),
  }
  $.post("api/Favorite", menu)

});

$(".fa-star").click(function (event) {
  event.preventDefault();
  $.get("/api/Favorites");
  $("#ftitle").text(restaurant);
  $("fdescription").text(description);
  $("#fdish").text(dish);
  $("#fitemDescription").text(itemDescription);
  $("#fwebsite").attr(website);
});

$(".fa-trash").click(function (event) {
  event.preventDefault();
  $.delete("/api/Favorite/:id", menu)

});

