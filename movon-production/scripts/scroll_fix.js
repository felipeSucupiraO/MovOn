/* 
Variables setting
*/
const scrollable = $(".movie-list ul");
const scrolled = $(window);
const scrollButton = $(".scroll-button");

/* 
Main Code
*/
scrollable.on("wheel", cancelHorizontalScroll);

scrollButton.on("click", scrollHorizontally);

/* 
Functions
*/
function cancelHorizontalScroll(event) {
    if (!event.shiftKey) {
        event.preventDefault()

        let delta = event.originalEvent.deltaY;
        scrolled.scrollTop(scrolled.scrollTop() + delta);
    }
}

function scrollHorizontally(event) {
    let classList = getClassList($(event.target).parents(".scroll-button")[0]);
    let direction = classList[classList.length - 1];
    
    let target = $(event.target).parents(".container").children(".movie-list ul");

    if (direction == "scroll-button-left") {
        target.scrollLeft(target.scrollLeft() - 390.36);
    } else {
        target.scrollLeft(target.scrollLeft() + 390.36);
    }
}