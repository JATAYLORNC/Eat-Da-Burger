$(function() {

  $(".createburger").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#burger").val().trim(),
      devoured: false
    };

    console.log(newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );

  });

  $(".devour-burger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");

    console.log(id);

    var devouredState = {
      devoured: true
    };

    console.log(devouredState);

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        console.log("Burger has been devoured!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


















 });