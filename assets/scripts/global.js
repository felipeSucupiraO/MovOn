// This file will be used to store global functions that will be used by many scripts

/* 
Functions
*/

function getClassList(element) {
    return element.className.split(/\s+/);
}

function getClickedMovie() {
    var movie = getMovie($(event.target), true);

    sessionStorage.setItem("currMovie", movie);
}

function getMovie(element, isChildren) {
    // isChildren = true: is a isChildren of the movie card
    // isChildren = false: is a parent of the movie card
    if (isChildren == true)
        // the following line gets the card that was clicked (the div element)
        var currCard = element.parents(".movie-card");
    else
        var currCard = element.children(".movie-card");
    // the folowing gets the classes of the div
    let classList = getClassList(currCard[0]);
    // finally, this one gets the last class of the div element, which will always be the movie's name
    let movie = classList[classList.length - 1];

    return movie;
}