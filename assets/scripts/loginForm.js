/* 
Variables Setting
*/

const { event } = require("jquery");

const form = $("form");

/* 
Main code
*/

form.on("submit", createUser);

/* 
Functions
*/

function createUser() {
    event.preventDefault()
    
    var name = form.children("#username");
    var email = form.children("#email");
    var password = form.children("#password");
    
    if (sessionStorage.getItem("password") == null) {
        sessionStorage.setItem("username", name.val());
        sessionStorage.setItem("email", email.val());
        sessionStorage.setItem("password", password.val());
    }
}