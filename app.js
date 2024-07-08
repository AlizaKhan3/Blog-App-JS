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
    let passwordLength = document.getElementById("passwordLength");
    let passwordMatch = document.getElementById("passwordMatch");
    let passwordNotMatched = document.getElementById("passwordMatched");

    if (userFirstName !== "" && userLastName !== "" && emailRegx.test(userEmail) && userPass.length >= 8 && userPass === userConfirmPass) {
        console.log("Success");
        passwordMatch.style.display = "block";
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

    } else if (!emailRegx.test(userEmail) && userFirstName === "" && userLastName === "" && userPass === "" && userConfirmPass === "") {
        console.log("failed!");
        Swal.fire({
            icon: "error",
            text: "Please fill all fields to register!",
            showConfirmButton: true,
        });
    } else if (userFirstName !== "" && userLastName !== "" && emailRegx.test(userEmail) && userPass.length < 8 && userPass === userConfirmPass) {
        passwordLength.style.display = "block";
        passwordMatch.style.display = "none";
    } else if (userFirstName !== "" && userLastName !== "" && emailRegx.test(userEmail) && userPass.length >= 8 && userPass !== userConfirmPass) {
      
    } 
}
