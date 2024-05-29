/* 
Variables Setting
*/

var playButton = $(".play-button");

/* 
Main Code
*/

playButton.on("click", getClickedMovie);

/* 
Functions
*/

function getClickedMovie() {
    var movie = getMovie($(event.target), true);

    sessionStorage.setItem("currMovie", movie);
}