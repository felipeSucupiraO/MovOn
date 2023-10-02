/* 
Variables Setting
*/
var profileCard = $(".profile-card");
var headerProfileIcon = $(".profile-section > .profile-icon");

/* 
Main Code
*/

headerProfileIcon.on("click", function() {
    profileCard.toggle();
});