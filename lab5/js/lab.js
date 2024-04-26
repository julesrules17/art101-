/*
* Author: Julia Gompertz <jgompert@ucsc.edu>
* Date: 25 April 2024
* License: Public Domain 
*/

// Define Variables 
var make = "Honda"; 
var model = "Civic";
var color = "Forest Green"; 
var year = 2021; 

// Calculate 
var currentYear = new Date().getFullYear(); 
var age = currentYear - year;

//Output variables using document.writeln()
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>"); 
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Age: " + age + " years<br>");
