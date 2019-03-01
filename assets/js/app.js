// Jquery Document Funtions

// document load function
$(document).ready(function() {
  renderButtons();
});

// adds a button after submit
$("#button-addon").on("click", function() {
  event.preventDefault();

  var inputText = $("#add")
    .val()
    .trim();

  // condition to only add a new button if a value is being added

  if (inputText !== "") {
    topics.push(inputText);
    $("#add").val("");
    renderButtons();
  }
});

//button click function

// array of topics

var topics = ["dog", "cat", "bird"];

function renderButtons() {
  $("#animal-button").empty();

  for (var i = 0; i < topics.length; i++) {
    var animal = topics[i];
    var button = $("<button class = 'animal mr-1 btn btn-success'/>")
      .attr("data-name", animal)
      .text(animal);
    $("#animal-button").append(button);
  }
}

// if an element with a class of animal is clicked trigger the function getApi
$(document).on("click", ".animal", getApi);

// Function getApi with the ajax call
function getApi() {
  var animal = $(this).attr("data-name");
  var queryURL =
    "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + animal;

  console.log(queryURL);

  // ajax request
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var imageURL = response.data.images.original.url;
    var stillImg = response.data.images.original_still.url;
    var animateImg = imageURL;
    // creating image to the DOM and adding the data states
    var animalImg = $("<img class = 'animalImg m-2'>");
    animalImg.attr({ src: stillImg, alt: animal });
    animalImg.attr("data-still", stillImg);
    animalImg.attr("data-animate", animateImg);
    animalImg.attr("data-state", "animate");
    $("#imageHere").prepend(animalImg);
  });
}

$(document).on("click", ".animalImg", gifState);

function gifState() {
  var state = $(this).attr("data-state");
  var animate = $(this).attr("data-animate");
  var still = $(this).attr("data-still");

  // condition to change their url based on state
  if (state === "still") {
    $(this).attr("src", animate);
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", still);
    $(this).attr("data-state", "still");
  }
}
