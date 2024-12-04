import{getAuth, signInWithEmailAndPassword}from "./firebase.js";

const auth = getAuth();


  let login_email = document.getElementById("login-email");
let login_password = document.getElementById("login-password");
let login_btn = document.getElementById("login-btn");

login_btn.addEventListener("click", logIn);

function logIn() {
    const email = login_email.value;
    const password = login_password.value;

    signInWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
            const user = userCredential.user;
            
            Swal.fire({
                text: 'Your account has been created',
                icon: 'success',
            });
            console.log(user);
    email.value = "";
    password.value = "";
    window.location.href = "index.html";
            
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
                title: "Error",
                text: "Password must be at least 6 characters long.",
                icon: "error",
                confirmButtonText: "OK"
              });
              });
}
