$(function(){
  getFoods();
  // set event listenrs
  $("#new-food-form").on("submit", function(e){
    //prevent form submission
    e.preventDefault();
    // grab data from form
    var formData = $(this).serialize();
    // post data to server with AJAX
    $.post("/foods", formData).done(function(){
    // When food has been successfully posted do something..
  });
 })
})

// Function definitions
function getFoods() {
  $.get("/foods", function(res){
    var foods = JSON.parse(res)
  // generate a template mold
  var template =  _.template($("#food-template").html());
  // clear existing items
  $("#food-ul").empty();
    // itterate through foods
    var foodItems = foods.map(function(food){
      return template(food);
    });
    // clear content (for repeated underscore)
    $("#food-ul").html("");
    // append foods to ul
    $("#food-ul").append(foodItems);
 });
}
