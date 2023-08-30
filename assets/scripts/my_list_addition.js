/* 
Variables setting
*/
const movieCards = $(".movie-card").parent("li");

/* 
Main code
*/

runCheck();

movieCards.find(".my-list-button").on("click", addMyListMovie);

/* 
Functions
*/

function runCheck() {
    for (i = 0; i < movieCards.length; i++) {
        checkMovie(movieCards[i]);
    }
}

function checkMovie(li) {
    let card = $(li).children(".movie-card")[0];
    let classList = getClassList(card);
    let movieName = classList[classList.length - 1];

    button = $(li).find(".my-list-button").children();

    if (sessionStorage.getItem(movieName) != null)
        button.attr("src", "../images/check_symbol.png")
}


function addMyListMovie() {
    // the following line gets the card that was clicked (the div element)
    let currCard = $(event.target).parents(".movie-card");
    // the folowing gets the classes of the div
    let classList = getClassList(currCard[0]);
    // finally, this one gets the last class of the div element, which will always be the movie's name
    let movie = classList[classList.length - 1];
    
    if (sessionStorage.getItem(movie) == null)
        sessionStorage.setItem(movie, "");
        runCheck();
}


function getClassList(element) {
    return element.className.split(/\s+/);
}