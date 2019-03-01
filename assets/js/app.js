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
// deletes the previews button added
$("#button-delete").on("click", function() {
  event.preventDefault();
  topics.pop();
  renderButtons();
});

// button clear

// array of topics

var topics = ["dog", "cat", "bird"];

function renderButtons() {
  $("#animal-button").empty();

  for (var i = 0; i < topics.length; i++) {
    var animal = topics[i];
    var button = $("<button class = 'animal m-1 p- btn btn-success'/>")
      .attr("data-name", animal)
      .text(animal);
    $("#animal-button").append(button);
  }
}

// if an element with a class of animal is clicked trigger the function getApi
$(document).on("click", ".animal", getApi);

// Function getApi with the ajax call
function getApi() {
  $("#imageHere").empty();
  var animal = $(this).attr("data-name");
  var apiKey = "&api_key=dc6zaTOxFJmzC";
  var limit = "&limit=12";
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" + animal + apiKey + limit;

  console.log(queryURL);

  // ajax request
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // creating 10 image to the DOM and adding the data states

    for (var i = 0; i < response.data.length; i++) {
      var imageURL = response.data[i].images.downsized.url;
      var stillImg = response.data[i].images.downsized_still.url;
      var animateImg = imageURL;

      // create images based on response from ajax call
      var animalImg = $(
        "<img class = 'animalImg img-fluid img-thumbnail m-2'>"
      );
      animalImg.attr({ src: stillImg, alt: animal });
      animalImg.attr("data-still", stillImg);
      animalImg.attr("data-animate", animateImg);
      animalImg.attr("data-state", "animate");

      $("#imageHere").prepend(animalImg);
    }
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
