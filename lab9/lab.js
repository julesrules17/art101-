/*
lab.js - this simple javascript/jquery uses buttons to modify some elements on the page
requirements: jQuery must be loaded for this script to work. 

Author: Julia Gompertz <jgompert@ucsc.edu>
Created: 12 May 2024
License: public domain
*/

$("#challenge, #problems, #results").on("click", "button", function() {
    $(this).parent().toggleClass("special");
  });
    $("#challenge, #problems, #results").each(function() {
      $(this).append("<button class='make-special'>Make Special</button>");
  });