// Jquery Document Funtions

// document load function
$(document).ready(function(){
    renderButtons();
    
   

    
});

$("#button-addon").on("click", function() {
    event.preventDefault();

    var inputText = $("#add").val();

    // condition to only add a new button if a value is being added
    if(inputText !== ''){
    topics.push(inputText);
    $("#add").val('');
    renderButtons();
    }
    
    
    
    
    
    console.log(topics);
    
    
    
});




//button click function


// array of topics

var topics = ["dog", "cat", "bird"];

function renderButtons(){

    $("#animal-button").empty();

    for (var i = 0; i < topics.length; i++) {
        var animal = topics[i];
        var button = $("<button class = 'animal mr-1 btn btn-success'/>").attr("data-name", animal).text(animal);
        $("#animal-button").append(button);
        
        
    }

}


