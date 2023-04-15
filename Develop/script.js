$(function () {
// Displaying current date in header.
$("#currentDay").text(days().format("MMMM D, YYYY"));
// Applying the present/past/future to each block
var currentHour = days().hour();
$(".time-block").each(function() {
var blockHour = parseInt($(this).attr("id").split("-")[1]);

 if (blockHour < currentHour) {
  $(this).addClass("past");
} else if (blockHour === currentHour) {
  $(this).addClass("past");
  $(this).removeClass("present");
} else {

$(this).removeClass("past");
$(this).removeClass("present");
$(this).addClass("future");

}
});



 // Adding code to get any user input that was saved in localStorage and set
$(".time-block").each(function () {
var id = $(this).attr("id");
var savedText = localStorage.getItem(id);

if (savedText) {
  $(this).find("textarea").val(savedText);

}
});


// adding a listener for click events on the save button. This code should

$(".saveBtn").on("click" , function() {

  var parent = $(this).parent();
  var id = parent.attr("id");
  var text = parent.find("textarea").val();

  localStorage.setItem(id, text);

});

});






// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
 
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

 