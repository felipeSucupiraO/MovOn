/* 
Variables Setting
*/

const form = $("form");

/* 
Main code
*/

if (form.find(".login-form-button > input").val() == "Sign-In") {
    form.on("submit", createUser);
}
else {
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
        sessionStorage.setItem("loged", "true");
    }
    else {
        window.alert("An account was already created. Please close and open the website again to create another.");
    }

    sendEmail(name, email, password);
}

function loginUser() {
    event.preventDefault();

    var emailInput = form.find("#email").val();
    var passwordInput = form.find("#password").val();

    if (emailInput == sessionStorage.getItem("email") && passwordInput == sessionStorage.getItem("password")) {
        window.alert("loged");
        sessionStorage.setItem("loged", "true");
    }
    else {
        window.alert("Email or Password Incorrect");
    }
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