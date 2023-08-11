var movieList = $(".my-list-list ul");
var movieCard = $(".my-list-list li");

movieCard.detach();

var data;
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
    
function makeMovieCard(movieCard, movieData) {
    movieCard.find(".my-list-card").addClass(movieData.name);
    movieCard.find(".movie-vertical-poster").attr("src", movieData.verticalImageUrl);
    movieCard.find(".movie-vertical-poster").attr("alt", movieData.imageAlt);
    movieCard.find(".play-button").attr("href", movieData.moviePageUrl);
    movieCard.find(".play-button").attr("title", movieData.moviePageUrlTitle);
}