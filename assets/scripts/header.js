var profileCard = $(".profile-card");
var headerProfileIcon = $(".profile-section > .profile-icon");

headerProfileIcon.on("click", function() {
    profileCard.toggle();
});