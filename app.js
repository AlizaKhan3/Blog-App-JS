let getStart = document.getElementById("getStart");
function getStarted() {
    setInterval(() => {
        window.location.href = "./signup.html"
    }, 1000)
}

let getStartedLogin = document.getElementById("getStartedLogin");
function getStartedLogin(){
    setInterval(()=>{
        window.location.href = "./login.html"
    },2000)
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

    const passwordLength = document.getElementById("passwordLength");
    const passwordMatch = document.getElementById("passwordMatch");
    const passwordNotMatched = document.getElementById("passwordNotMatched");

    // Reset display styles
    passwordLength.style.display = "none";
    passwordMatch.style.display = "none";
    passwordNotMatched.style.display = "none";

    if (userFirstName !== "" && userLastName !== "" && emailRegx.test(userEmail)) {
        if (userPass.length >= 8 && userPass === userConfirmPass) {
            console.log("Success");
            passwordMatch.style.display = "block";
            Swal.fire({
                icon: "success",
                title: "Welcome " + fullName.toLocaleUpperCase(),
                text: "Lets Create and Share together",
                showConfirmButton: false,
                timer: 2000
            });
            setTimeout(() => {
                window.location.href = "./blog.html"
            }, 2000)
        } else if (userPass.length < 8) {
            passwordLength.style.display = "block";
        } else if (userPass !== userConfirmPass) {
            passwordNotMatched.style.display = "block";
        }
    } else if (!emailRegx.test(email)) {
        console.log("please enter a valid emial")
        Swal.fire({
            icon: "error",
            text: "Please enter valid email ID",
            showConfirmButton: true,
        });
    } else {
        Swal.fire({
            icon: "error",
            text: "Please fill all fields to register!",
            showConfirmButton: true,
        });
    }

    //Setting up local storage to store user data
    var mylocalStorage = localStorage.getItem("userAccounts");
    var arrData = JSON.parse(mylocalStorage);
    if (!arrData) {
        arrData = [];
    }

    var userAccounts = {
        userFirstName: userFirstName,
        userLastName: userLastName,
        userEmail: userEmail,
        userPass: userPass
    }

    arrData.push(userAccounts);
    localStorage.setItem("userAccouts", JSON.stringify(arrData));
    console.log(userAccounts);
    //Setting up local storage
}
