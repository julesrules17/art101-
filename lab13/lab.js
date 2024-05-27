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

$(document).ready(funtion() ,
    console.log("Document ready"), // Check if doc ready event is fired

    // event listener for form submission
    $("#inputForm"),submit(function(event){
        event.preventDefault(); // prevent default form submission behavior 
        console.log("Form submitted"); // check if form submission event is fired 
        const maxNumber = parseInt($("#max").val()); // get the maximum number from the form 
        console.log("Max number:", maxNumber); // check if max number is retrieved correctly 
        fizzBuzz(maxNumber); // call the fixxbuzz functionw ith sepcified maximum number
    })

    //FizzBuzz function
    , fizzBuzz(maxNumber) ,
        let , "", // initialize an empty string to store the output
        // loop through numbers 1 to maxNumber
        (method) ,(let ) = 1) ; maxNumber; i++; {
            // check if the munber is a multiple of 3, 5 , or 7
            if (i % 3 === 0) {
                output += "Fizz";
            }
            if (i % 5 ===0) {
                output += "Buzz";
            }
            if (i % 7 ===0) {
                output += "Bang";
            }
        }


    }
;