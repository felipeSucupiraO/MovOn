/*
Variables setting
*/

const movieShowcaseAside = $(".movie-showcase");
var currMovie = 0;

/* 
Main Code
*/

// this changes to the starting movie
changeMoviePoster(currMovie);

changeMoviePosterOnTimer();

/* 
Functions
*/

async function changeMoviePosterOnTimer() {
    var movieData = await getMoviesData();
    setInterval(() => {
        currMovie++;
        if (currMovie > movieData.movieArray.length - 1) {
            currMovie = 0;
        }
        changeMoviePoster(currMovie);
    }, 5000);
}

async function changeMoviePoster(movieNumber) {
    var movieData = await getMoviesData();
    movieShowcaseAside.find("img").attr("src", movieData.movieArray[movieNumber].horizontalImageUrl);
    movieShowcaseAside.find("img").attr("alt", "&#34" + movieData.movieArray[movieNumber].visualName + "&#34 movie poster.");
    movieShowcaseAside.find("p").html(movieData.movieArray[movieNumber].visualName);
}

async function getMoviesData() {
    var rawData = await fetch("./data/movies.json");
    var jsonData = await rawData.json();
    return jsonData;
}