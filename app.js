let getStart = document.getElementById("getStart");
function getStarted() {
    setInterval(() => {
        window.location.href = "./signup.html"
    }, 1000)
}

let getStartedLogin = document.getElementById("getStartedLogin");
function Login() {
    setInterval(() => {
        window.location.href = "./login.html"
    }, 2000)
}

// onclick="renderBlogPage()" id="renderBlogPage" 
let blogPageButton = document.getElementById("blogPageButton");
function renderBlogPage() {
    setInterval(() => {
        window.location.href = "./blog.html";
    }, 2000)
}


let signup = document.getElementById("signup");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// SIGNUP PAGE
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

    // Setting up local storage to store user data
    var mylocalStorage = localStorage.getItem("userAccounts");
    var arrData = JSON.parse(mylocalStorage); //  || []; // Initialize an empty array if no data exists
 if(!arrData){
    arrData = [];

 }


    var userAccounts = {
        userFirstName: userFirstName,
        userLastName: userLastName,
        userEmail: userEmail,
        userPass: userPass
    }

    arrData.push(userAccounts);

    localStorage.setItem("userAccounts", JSON.stringify(arrData)); // Note the correct key name
    console.log(arrData);
}
// ----------------------------------------------------------------------

//LOGIN Page ---incomplete
// function signUp() {
//     let userFirstName = firstName.value.trim();
//     let userLastName = lastName.value.trim();
//     let userEmail = email.value.trim();
//     let userPass = password.value.trim();
//     let fullName = userFirstName + " " + userLastName;


// }





//Blog Page
  const quill = new Quill('#editor', {
    theme: 'bubble', // Specify theme in configuration
  });

// const quill = new Quill('#editor', {
//     theme: 'snow'
//   });