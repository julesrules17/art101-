/*
lab.js - this simple javascript/jquery uses buttons to modify some elements on the page
requirements: jQuery must be loaded for this script to work. 

Author: Julia Gompertz <jgompert@ucsc.edu>
Created: 12 May 2024
License: public domain
*/

$(document).ready(function() {
    // Add buttons to challange, problems, and result sections
    $("#challenge").append("<button id='button-challenge'>Make Special</button>");
    $("#problems").append("<button id='button-problems'>Make Special</button>");
    $("#results").append("button id='button-results'>Make Speicail</button>");

    // add click listeners to the buttons
    $("#button-challenge").click(function() {
        $("#challenge").toggleClass("special");
    });

    $("#button-problems").click(function() {
        $("#problems").toggleClass("special");
    });

    $("#button-results").click(function() {
        $("#results").toggleClass("special");
    });
});