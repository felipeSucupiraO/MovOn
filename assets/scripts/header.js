/* 
Variables Setting
*/
var profileCard = $(".profile-card");
var headerProfileIcon = $(".profile-section > .profile-icon");

/* 
Main Code
*/

if (sessionStorage.getItem("logado") == "true") {
    profileCard.find(".profile-card-name").text(sessionStorage.getItem("username"));
    profileCard.find(".profile-card-email").text(sessionStorage.getItem("email"));
}

headerProfileIcon.on("click", function() {
    profileCard.toggle();
});