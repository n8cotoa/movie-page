// Business Logic
function Ticket(movie, showtime, age) {
  this.movie = movie;
  this.showtime = showtime;
  this.age = age;
}

function ticketPrice (input) {
  var price = 5
  if (input.movie === "Movie 1" || input.movie === "Movie 3") {
    price += 3
  } else {
    price += 2
  }
  if (input.showtime === "Showtime 4" || input.showtime === "Showtime 5" || input.showtime === "Showtime 6" ) {
    price += 3
  } else {
    price += 2
  }
  if (input.age >= 65 ) {
    price += 1
  } else {
    price += 3
  }
  return price
}

function ageValidation(input) {
  if (input < 0) {
    return false
  } else if (isNaN(input)) {
    return false
  } else {
    return true
  }
}
// User Interface Logic

$(document).ready(function() {

  $("#movies span").click(function() {
    var movie = $(this).text();
    $("#movies span").not(this).slideToggle();
    $("#showtime").slideToggle("slow");
    $(this).slideDown();

    $("#showtime span").click(function() {
      var showtime = $(this).text();
      $("#showtime span").removeClass("selected");
      $(this).addClass("selected");
      $("#ageInput").fadeIn("slow");


    $("#ageInput button").click(function(event) {
      event.preventDefault();
      var age = parseInt($("input#age").val());
      var ticket = new Ticket (movie, showtime, age)
      if (ageValidation(age)) {
        $(".ticket-price h1").text(ticketPrice(ticket))
      } else {
        alert("Please input a number higher than 0")
      }
      });
    });
  });




});
