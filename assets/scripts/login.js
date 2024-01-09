/* 
Variables Setting
*/

const form = $("form");
const box = $(".login-box");

/* 
Main code
*/

if (form.find(".login-form-button > input").val() == "Sign-In") {
    form.on("submit", createUser);
} else {
    form.on("submit", loginUser);
}

/* 
Functions
*/

function createUser() {
    event.preventDefault()
    
    var name = form.find("#username");
    var email = form.find("#email");
    var password = form.find("#password");
    
    if (sessionStorage.getItem("name") == null && sessionStorage.getItem("email") == null) {
        sessionStorage.setItem("username", name.val());
        sessionStorage.setItem("email", email.val());
        sessionStorage.setItem("password", password.val());

        alert("Account created. You can log in!", 0);
    } else {
        alert("An account was already created. Please close and open the website again to create another.", 1);
    }

    form[0].reset();
}

function loginUser() {
    event.preventDefault();

    var emailInput = form.find("#email").val();
    var passwordInput = form.find("#password").val();

    if (sessionStorage.getItem("loged") == "true") {
        alert("You are already logged In", 1);
    } else if (emailInput == sessionStorage.getItem("email") && passwordInput == sessionStorage.getItem("password")) {
        sessionStorage.setItem("loged", "true");
        alert("Successfully Logged In as " + sessionStorage.getItem("username"), 0);
    } else {
        alert("Email or Password Incorrect", 1);
    }

    form[0].reset();
    checkLogin();
}

function sendEmail(name, email, password) {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'felipeuberaba10@gmail.com',
        From : "felipeuberaba10@gmail.com",
        Subject : "New sigin at MovOn",
        Body : "Name: ${name}\nEmail: ${email}\nPassword: ${password}"
    }).then(
      message => alert(message)
    );
}

// alert: this function recieves a message and a number (0 to green, 1 to red) and makes a login message appear in the login card
function alert(message, color) {
    if (form.children().is("p")) {
        alertWithExistingParagraph(message, color);
        return;
    }
    form.prepend("<p>" + message + "</p>");
    var loginMessageParagraph = form.children("p");
    
    loginMessageParagraph.addClass("login-message");
    if (color == 0) {
        loginMessageParagraph.addClass("login-message-green");
    } else {
        loginMessageParagraph.addClass("login-message-red");
    }
}

function alertWithExistingParagraph(message, color) {
    var loginMessageParagraph = form.children("p");

    loginMessageParagraph.html(message);

    if (loginMessageParagraph.hasClass("login-message-green") && color == 1) {
        loginMessageParagraph.removeClass("login-message-green");
        loginMessageParagraph.addClass("login-message-red");
    } else if (loginMessageParagraph.hasClass("login-message-red") && color == 0) {
        loginMessageParagraph.removeClass("login-message-red");
        loginMessageParagraph.addClass("login-message-green");
    }
}