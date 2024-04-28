/*
/
//Author: Julia Gompertz <jgompert@ucsc.edu> 
// Created 28 April 2024 
// License: Public Domain

*/

// Define Variables 
var myTransport = ["car", "bike", "bus", "train"];

// Create an object for my main ride 
var myMainRide = {
  make: "Honda",
  model: "Civic",
  year: 2021,
  color: "forest green",
  age: function() {
    return 2024 - this.year;
  }
};

// Output myTransport
document.writeln("Getting around: " + myTransport.join(", ") + "<br>");

// Output myMainRide using JSON.Stringify() for better formatting 
document.writeln("My Main Ride: <pre>" + JSON.stringify(myMainRide, null, '\t') + "</pre>");
