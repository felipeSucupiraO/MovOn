/* 
Variables Setting
*/

var page = $("html");
var movieObjetct;

/* 
Main Code
*/

fetch("../data/movies.json")
.then ((request) => {
    return request.json();
})
.then ((data) => {    
    for (let i = 0; i < data.movies.length; i++) {
        if (data.movies[i].name == sessionStorage.getItem("currMovie")) {
            movieObjetct = data.movies[i];
            break;
        }
    }

    return movieObjetct;
})
.then ((data) => {
    makeMoviePage(data);
});

/* 
Functions
*/

function makeMoviePage(movieObjetct) {
    page.find("title").append(movieObjetct.visualName + " - MovOn");
    page.find("h2")[0].prepend(movieObjetct.visualName + " ");
    page.find("#movie-name").append(movieObjetct.visualName);
    page.find("#movie-description").append(movieObjetct.description);
    page.find(".movie-page-showcase").attr("src", movieObjetct.horizontalImageUrl);
}