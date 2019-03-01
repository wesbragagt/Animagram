// Jquery Document Funtions

// document load function
$(document).ready(function(){});






//button click function
$("<button>").on("click", function() {});

// array of topics

var topics = ["dog", "cat", "bird"];

function renderButtons(){
    for (var i = 0; i < topics.length; i++) {
        var animal = topics[i];
        var button = $("<button class = 'mr-1 btn btn-success'/>").text(animal);
        $("#animal-button").append(button);
        
        
    }

}

renderButtons();