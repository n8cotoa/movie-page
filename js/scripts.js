// Business Logic
function Ticket(movie, showtime, age) {
  this.movie = movie;
  this.showtime = showtime;
  this.age = age;
}

function ticketPrice (input) {
  var price = 5
  if (input.movie === "new" ) {
    price += 3
  } else {
    price += 1
  }
  if (input.showtime === "matinee") {
    price += 2
  } else {
    price += 4
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

  $("#movies button").click(function() {
    var movie = $(this).val();
    $("#movies button").not(this).slideToggle();
    $("#showtime").slideToggle("slow");
    $(this).slideDown();

    $("#showtime button").click(function() {
      var showtime = $(this).val();
      $("#showtime button").removeClass("selected");
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

    $(".incr-btn").on("click", function (e) {
        var $button = $(this);
        var oldValue = $button.parent().find('.quantity').val();
        $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
        if ($button.data('action') == "increase") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below 1
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
                $button.addClass('inactive');
            }
        }
        $button.parent().find('.quantity').val(newVal);
        e.preventDefault();
    });



});
