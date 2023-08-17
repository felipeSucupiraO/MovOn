/* 
Variables setting
*/
const movieCards = $(".movie-card").parent("li");

/* 
Main code
*/

movieCards.find(".my-list-button").on("click", addMyListMovie);

/* 
Functions
*/

function addMyListMovie() {
    // the following line gets the card that was clicked (the div element)
    let currCard = $(event.target).parents(".movie-card");
    // the folowing gets the classes of the div
    let classList = getClassList(currCard[0]);
    // finally, this one gets the last class of the div element, which will always be the movie's name
    let movie = classList[classList.length - 1];
    
    if (sessionStorage.getItem(movie) == null) {
        sessionStorage.setItem(movie, "");
        alert("\"" + movie + "\" was added to your list!")
    } else {
        alert("This movie is already on your list!")
    }
}

function getClassList(element) {
    return element.className.split(/\s+/);
}