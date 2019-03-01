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

  console.log(topics);
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

// function which returns the name of the animal after clicked
function alertAnimal() {
  var animalName = $(this).attr("data-name");
  alert(animalName);
}
$(document).on("click", ".animal", getApi);

// setup the ajax call for the giffy api
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
    console.log(imageURL);

    var animalImg = $("<img class = 'animalImg m-2'>");
    animalImg.attr({ src: imageURL, alt: animal });
    $("#imageHere").prepend(animalImg);
  });
}
