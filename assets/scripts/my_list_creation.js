var movieList = $(".my-list-list ul");
var movieCards = $(".my-list-list li:last-child");

movieCards.hide();

var data;
fetch("../data/movies.json")
    .then((request) => {
        return request.json();
    })
    .then((data) => {
        data.movies.forEach(i => {
            if (sessionStorage.getItem(i.name) != null) {
                if (sessionStorage.getItem("isFirstMyListMovie") == "true") {
                    movieCards.show();
                    sessionStorage.setItem("isFirstMyListMovie", "false");
                } else {
                    movieCards.copy.appendTo(movieList);
                }
            }
        });
    })