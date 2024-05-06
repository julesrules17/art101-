// Author: Julia Gompertz <jgompert@ucsc.edu>
// Created: 5 May 2024
// License: Public Domain 

// function to calculate the square of a number 
function square(x) {
    return x * x;
}

// function to calculate the cube of a number 
function cube(x) {
    return x * x * x;
}

// Function to double a number 
function double(x) {
    return x * 2;
}

// create an array of numbers 
var numbers = [1, 2, 3, 4, 5];

//use map on the array using the square function as a callback 
var squaredNumbers = numbers.map(square);
console.log("Squared numbers:", squaredNumbers);

// use map on the array using the cube function as a callback 
var cubedNumbers = numbers.map(cube);
console.log("Cubed numbers:", cubedNumbers);

// use map on the array using the double function as a callback 
var doubledNumbers = numbers.map(double);
console.log("Doubled numbers:", doubledNumbers);
