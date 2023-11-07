/* 
Variables Setting
*/
var profileCard = $(".profile-card");
var headerProfileIcon = $(".profile-section > .profile-icon");
var logoutButton = profileCard.find("#logout");

/* 
Main Code
*/

logoutButton.on("click", logout);

if (sessionStorage.getItem("loged") == "true") {
    profileCard.find(".profile-card-name").text(sessionStorage.getItem("username"));
    profileCard.find(".profile-card-email").text(sessionStorage.getItem("email"));
}

headerProfileIcon.on("click", function() {
    profileCard.toggle();
});

/* 
Functions
*/

function logout() {
    sessionStorage.setItem("loged", "false");
    location.reload();
}