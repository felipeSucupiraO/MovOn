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
    var movie = getMovie($(li), false);

    button = $(li).find(".my-list-button").children();

    if (sessionStorage.getItem(movie) != null)
        button.attr("src", "../images/check_symbol.png")
}


function addMyListMovie() {
    var movie = getMovie($(event.target), true);
    
    if (sessionStorage.getItem(movie) == null)
        sessionStorage.setItem(movie, "");
        runCheck();
}