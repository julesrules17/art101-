/*
lab.js - this simple javascript/jquery uses buttons to modify some elements on the page
requirements: jQuery must be loaded for this script to work. 

Author: Julia Gompertz <jgompert@ucsc.edu>
Created: 12 May 2024
License: public domain
*/

$("#Challenge, #Problems, #Results").on("click", "button", function() {
    $(this).parent().toggleClass("special");
  });
    $("#Challenge, #Problems, #Results").each(function() {
      $(this).append("<button class='make-special'>Make Special</button>");
  });
  