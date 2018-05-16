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
    $("#dish1").text(dig.response.result.menus[0].items[1].menu_item_name);
    $("#itemDescription1").text(dig.response.result.menus[0].items[1].menu_item_description);
    $("#dish2").text(dig.response.result.menus[0].items[2].menu_item_name);
    $("#itemDescription2").text(dig.response.result.menus[0].items[2].menu_item_description);
    $("#dish3").text(dig.response.result.menus[0].items[3].menu_item_name);
    $("#itemDescription3").text(dig.response.result.menus[0].items[3].menu_item_description);
    $("#dish4").text(dig.response.result.menus[0].items[4].menu_item_name);
    $("#itemDescription4").text(dig.response.result.menus[0].items[4].menu_item_description);
    $("#dish5").text(dig.response.result.menus[0].items[5].menu_item_name);
    $("#itemDescription5").text(dig.response.result.menus[0].items[5].menu_item_description);
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
    dish1: $("#dish1").text(),
    itemDescription1: $("#itemDescription1").text(),
    dish2: $("#dish2").text(),
    itemDescription2: $("#itemDescription2").text(),
    dish3: $("#dish3").text(),
    itemDescription3: $("#itemDescription3").text(),
    dish4: $("#dish4").text(),
    itemDescription4: $("#itemDescription4").text(),
    dish4: $("#dish4").text(),
    itemDescription4: $("#itemDescription4").text(),
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

