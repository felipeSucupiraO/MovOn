/* 
Variables setting
*/
var movieList = $(".my-list-list ul");
var movieCard = $(".my-list-list li");
var removeButtons;

/* 
Main code
*/

movieCard.detach();

fetch("../data/movies.json")
.then((request) => {
    return request.json();
})
.then((data) => {
    data.movies.forEach(i => {
        if (sessionStorage.getItem(i.name) != null) {
            movieCard.clone().appendTo(movieList);
            
            let current = $(".my-list-list li:last-child");
            
            makeMovieCard(current, i);
        }
    });
})
.then(() => {
    removeButtons = $(".my-list-button");
    removeButtons.on("click", removeMovie);
})

/* 
Functions
*/

function makeMovieCard(movieCard, movieData) {
    movieCard.find(".movie-card").addClass(movieData.name);
    movieCard.find(".movie-vertical-poster").attr("src", movieData.verticalImageUrl);
    movieCard.find(".movie-vertical-poster").attr("alt", movieData.imageAlt);
    movieCard.find(".play-button").attr("href", movieData.moviePageUrl);
    movieCard.find(".play-button").attr("title", movieData.moviePageUrlTitle);
}

function removeMovie() {
    // the following line gets the card that was clicked (the div element)
    let card = $(event.target).parents(".movie-card");
    let classList = getClassList(card[0])
    let movie = classList[classList.length - 1];
    sessionStorage.removeItem(movie);
    
    $(event.target).parents("li").remove();
}

function getClassList(element) {
    return element.className.split(/\s+/);
}