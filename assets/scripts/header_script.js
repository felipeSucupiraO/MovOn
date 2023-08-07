var profileCard = $(".profile-card");
var headerProfileIcon = $(".profile-section > .profile-icon");

headerProfileIcon.on("click", function() {
    if (profileCard.css("display") == "none") {
        profileCard.css("display", "grid");
    } else {
        profileCard.css("display", "none");
    }
});