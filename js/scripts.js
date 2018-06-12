// Business Logic
var data = new Data();

function Data() {
  this.receipts = []
}

function Receipt(name) {
  this.name = name;
  this.tickets = [];
}

function Ticket(movie, showtime, ticketArray) {
  this.movie = movie;
  this.showtime = showtime;
  this.tickets = ticketArray;
}

function getSum(total, num) {
    return total + num;
}

function ticketPrice (input) {
  var quantity = input.tickets.reduce(getSum);
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

  if (input.tickets[0] >= 1) {
    var regular = (price + 3) * input.tickets[0];
  } else {
    var regular = 0;
  }

  if (input.tickets[1] >= 1) {
    var student = (price + 2) * input.tickets[1];
  } else {
    var student = 0;
  }

  if (input.tickets[2] >= 1){
    var senior = (price + 1) * input.tickets[2];
  } else {
    var senior = 0;
  }
  return regular + student + senior;
}

function makeTickets(movie, showtime, inputArray) {
  new Ticket()
}

$(document).ready(function() {

  $("#movies button").click(function() {
    var movie = $(this).val();
    $("#movies button").removeClass("selected-movie");
    $(this).addClass("selected-movie");
    $("#showtime").slideDown("slow");
    $("#showtime button").removeClass("selected");
    $("#ageInput").slideUp();


    $("#showtime button").click(function() {
      var showtime = $(this).val();
      $("#showtime button").removeClass("selected");
      $(this).addClass("selected");
      $("#ageInput").slideDown("slow");

      $("#ticket-button").click(function() {


        var regular = parseInt($("#regular").val());
        var student = parseInt($("#student").val());
        var senior = parseInt($("#senior").val());
        var ticketArray = [regular, student, senior]
        var ticket = new Ticket (movie, showtime, ticketArray)
        $(".ticket-price h1").text("Your Total is: " + "$ " + ticketPrice(ticket));


      });
    });
  });



  });
