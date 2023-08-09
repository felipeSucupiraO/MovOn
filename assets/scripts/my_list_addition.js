const myListButton = $(".my-list-button img");

myListButton.on("click", addMyListMovie);

function addMyListMovie() {
    if (sessionStorage.getItem("Man in The Woods") == null) {
        sessionStorage.setItem("Man in The Woods", "1");
        alert("\"Man in The Woods\" was added to your list!")
    } else {
        alert("This movie is already on your list!")
    }
}