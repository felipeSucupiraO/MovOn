/* 
Variables Setting
*/

var htmlElement = $("html");
var movieObjetct;

/* 
Main Code
*/

fetch("../data/movies.json")
.then ((request) => {
    return request.json();
})
.then ((data) => {    
    for (let i = 0; i < data.movieArray.length; i++) {
        if (data.movieArray[i].name == sessionStorage.getItem("currMovie")) {
            movieObjetct = data.movieArray[i];
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
    htmlElement.find("title").append(movieObjetct.visualName + " - MovOn");
    htmlElement.find("h2")[0].prepend(movieObjetct.visualName + " ");
    htmlElement.find("#movie-name").append(movieObjetct.visualName);
    htmlElement.find("#movie-description").append(movieObjetct.description);
    htmlElement.find(".movie-page-showcase").attr("src", "." + movieObjetct.horizontalImageUrl);
}