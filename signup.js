import { 
    getAuth,
    onAuthStateChanged, 
    createUserWithEmailAndPassword
  } from "./firebase.js";

  const auth = getAuth();
  // console.log(auth)



  let signup_email = document.getElementById("signup-email");
  let signup_password = document.getElementById("signup-password");
  let signup_btn = document.getElementById("signup-btn");

  signup_btn.addEventListener("click", signUp)

  
  

  onAuthStateChanged(auth, (user) => {
    if (user) {
        // console.log("user is logged in");
      const uid = user.uid;

    } else {
      // console.log("user is not logged in")
    }
  });

  function signUp(){

    if (signup_email.value.trim() === "" || signup_password.value.trim() === "") {
      Swal.fire({
              title: "Warning!",
              text: "Please fill all fields",
              icon: "warning",
              confirmButtonText: "OK"
            });
            return;
          }

      createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
		.then(async (userCredential) => {
					Swal.fire({
						text: 'Your account has been created',
						icon: 'success',
					});

       signup_email.value = "";
       signup_password.value = "";
       location.href = "login.html";
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




