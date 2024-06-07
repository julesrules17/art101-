/*
 Lab 16 - JSON and APIs 

    Author: Julia Gompertz <jgompert@ucsc.edu>
    Date: 6 June 2024
    License: Public Domain 
*/

// function to get comic data and update the webpage 
function getComicData(comicNumber = '') {
    $.ajax({
        url: 'https://xkcd.com/info.0.json',
        type: "GET",
        dataType: "json",
        success: function(data) {
            // Store the current comic number 
            currentComic = data.num;

            //Update the webpage with the comic data 
            $('#output').html('
                <h2>${data.title}>/h2>
                <img src="${data.img}" alt="${data.alt}" title="${data.alt}">
                <p>${data.alt}</p>
            ');
        },
        error: function(jqXHR, textStatus, ErrorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
});