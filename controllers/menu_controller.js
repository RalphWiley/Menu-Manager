

function searchRestaurant(restaurant) {

    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "https://openmenu.com/api/v2/search.php?key=fbadc01d-5338-11e8-8dcc-525400552a35&s=" + restaurant + "&postal_code=66213&city=overland+park&country=us";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        var test = response;
        
        
      // Printing the entire object to console
      console.log(test.response);
        // console.log(response.result);
      // Constructing HTML containing the artist information
      var restaurantName = $("<h1>").text(test.response.result.restaurants[0].restaurant_name);
      var description = $("<p>").text(test.response.result.restaurants[0].brief_description);
      var menuItems = $("<h5>").text(test.response.result.menus[0].items[0].menu_item_name);
      var itemDescription = $("<p>").text(test.response.result.menus[0].items[0].menu_item_description);
   
      

      // Empty the contents of the artist-div, append the new artist content
      $("#restaurant-div").empty();
      $("#restaurant-div").append(restaurantName, description, menuItems, itemDescription);
    });
  }

  // Event handler for user clicking the select-artist button
  $("#findRestaurant").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var inputRestaurant = $("#searchRestaurant").val().trim();

    // Running the searchBandsInTown function (passing in the artist as an argument)
    searchRestaurant(inputRestaurant);
  });