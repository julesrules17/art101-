/*
Lab 12: Sorting Hat

    Author: Julia Gompertz <jgompert@ucsc.edu>
    Date: 23 May 2024
    License: Public Domain
*/ 

// Hogwarts house descriptions 
var houseDescriptions = {
    Gryffindor: "Gryffindor values braver, courage, and chivalry.",
    Ravenclaw: "Ravenclaw values intelligence, wit, and wisdom.",
    Slytherin: "Slytherin values ambition, cunning, and resourcefulness.",
    Hufflepuff: "Hufflepuff values hard work, pationece, loyalty, and fair play.",
};

// Array of Hogwarts houses 
var houses = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];

// Funtion to sort a name into a Hogwarts house 
function sortingHat(name) {
    //Calculate the hash value 
    var hash = 0;
    for (var i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    has = Math.abs(hash);

    // Use modules to get the remainder when dividing by the number of houses
    var mod = hash % houses.length;

    // Get the names of the house 
    var description = houseDescriptions[house];

    // Retuen the name and description of the house
    return {
        name: house,
        description: description
    };
}

// Click listener for the button 
