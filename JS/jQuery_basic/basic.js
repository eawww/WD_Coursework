$(document).ready(function () { //this function gets called when the document has finished loading
    $('#button').on('click',function(){ //write an event handler for click
       $("#text").text($('#field').val()); //change the text of the element with id=text to the value of the textfield
    });
});

