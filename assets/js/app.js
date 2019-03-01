// Jquery Document Funtions

// document load function
$(document).ready(function(){
    renderButtons();
    
    $("#button-addon").on("click", function() {
        event.preventDefault();

        var inputText = $("#add").val();
        if(inputText !== ''){
        topics.push(inputText);
        $("#add").val('');
        }
        
        
        
        
        
        console.log(topics);
        
        
        
    });

    
});





//button click function


// array of topics

var topics = ["dog", "cat", "bird"];

function renderButtons(){
    for (var i = 0; i < topics.length; i++) {
        var animal = topics[i];
        var button = $("<button class = 'mr-1 btn btn-success'/>").text(animal);
        $("#animal-button").append(button);
        
        
    }

}


