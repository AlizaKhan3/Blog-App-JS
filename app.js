let getStart = document.getElementById("getStart");

function getStarted() {
    setInterval(() => {
        window.location.href = "./signup.html"
    }, 1000)
}

let signup = document.getElementById("signup");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");


let emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function signUp() {
    let userEmail = email.value.trim();
    let userFirstName = firstName.value.trim();
    let userLastName = lastName.value.trim();
    let userConfirmPass = confirmPassword.value.trim();
    let userPass = password.value.trim()
    let fullName = userFirstName + " " + userLastName;

    if (userFirstName !== "" && userLastName !== "" && emailRegx.test(userEmail) && userPass.length >= 8 && userPass === userConfirmPass) {
        console.log("Success");
        Swal.fire({
            icon: "success",
            title: "Welcome " + fullName.toLocaleUpperCase(),
            // text: "Welcome " + fullName.toLocaleUpperCase(),
            showConfirmButton: false,
            timer: 2000
        });
        setTimeout(() => {
            window.location.href = "./login.html"
        }, 2000)
    } else if (!emailRegx.test(userEmail)) {
        console.log("failed!");
        Swal.fire({
            icon: "error",
            text: "Please enter Valid Email",
            showConfirmButton: false,
            timer: 2000
        });
    } else if (userPass.length < 8) {
        console.log("Password should not be less than 8!");

    }
}

// signup.addEventListener("click", signUp);

// let emailRegex = "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/"