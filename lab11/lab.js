/* 
    lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

    Requirements: jQuery must be loaded for this script to work.

    Author: julia gompertz
    Date: 19 May 2024
    License: public domain
*/

// Sorts the characters of a string in alphabetical order. 
function sortString(inputString) {
    // we have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

//wait for the doc to fully load
$(document).ready(function() {
    // click listener for button 
    $("#submit").click(function(){
        // get value of input field 
        const userName = $("#user-name").val();

        // now lets sort it
        const userNameSorted = sortString(userName);

        // append a new div to our output div
        $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
    });
});