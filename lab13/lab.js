/*
    FizzBuzz function:
    Loops through numbers 1 to 200, printing "Fizz" if a multiple of 3, 
    "Buzz" if a multiple of 5, "Boom" if a multiple of 7.
    and combines them if a multiple of more than 3, 5, or 7, 
    Outputs the results to the output div. 

    Author: Julia Gompert <Jgompert@ucsc.edu>
    Date: 26 May 2024
    License: Public Domain 
*/

$(document).ready(funtion() {
    console.log("Document ready"); // Check if doc ready event is fired

    // event listener for form submission
    $("#inputForm").submit(function(event){
        event.preventDefault(); // prevent default form submission behavior 
        console.log("Form submitted"); // check if form submission event is fired 
        const maxNumber = parseInt($("#max").val()); // get the maximum number from the form 
        console.log("Max number:", maxNumber); // check if max number is retrieved correctly 
        fizzBuzz(maxNumber); // call the fixxbuzz functionw ith sepcified maximum number
    });

});