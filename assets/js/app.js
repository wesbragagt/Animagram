// array of topics and list of animals available to add

var topics = [
    "dog",
    "cat",
    "bird",
    "deer",
    "elephant",
    "horse",
    "goat",
    "chicken",
    "owl",
    "raccon",
    "lion",
    "cow",
    "duck"
  ];
var lowerCaseList = [];
  
  // loop through this array of animals and make them lowercase to make it easier to compare with input provided.
  var listOfAnimals = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
  ];
  for (var i = 0; i < listOfAnimals.length; i++) {
    lowerCaseList.push(listOfAnimals[i].toLowerCase());
  }

// document load function
$(document).ready(function() {
  renderButtons();
});

// adds a button after submit
$("#button-addon").on("click", function() {
  event.preventDefault();

  var inputText = $("#add")
    .val()
    .trim()
    .toLowerCase();



  // condition to only add a new button if that indeed is an animal and it doesn't already exist

  if (lowerCaseList.indexOf(inputText) !== -1) {
    if (topics.indexOf(inputText) > -1) {
      alert(inputText + " has already been added.");
      return;
    } else {
      if (inputText !== "") {
        topics.push(inputText);
        $("#add").val("");
        renderButtons();
      }
    }
  } else {
    alert(inputText + " is not an acceptable animal");
  }
});
// deletes the previews button added
$("#button-delete").on("click", function() {
  event.preventDefault();
  topics.pop();
  renderButtons();
});





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


// animate and pause giffs states
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
