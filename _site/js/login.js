
                       // Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {

                   // Select elements from HTML
  const passwordInput = document.querySelector("#password");
  const passwordError = document.querySelector('.password-error');
  const form = document.querySelector(".login-container");
  const togglePasswordBtn = document.querySelector(".toggle-password");
  const togglePasswordIcon = togglePasswordBtn.querySelector("i");

// Show / hide eye button depending on input value
  passwordInput.addEventListener("input", () => {
    const passwordValue = passwordInput.value;

    if (passwordValue.length > 0) {
  togglePasswordBtn.classList.remove("eye-icon-hidden");
} else {
  togglePasswordBtn.classList.add("eye-icon-hidden");
}
  });

            // Toggle show / hide password on button click
togglePasswordBtn.addEventListener("click", () => {

  const isPasswordHidden = passwordInput.type === "password";

   if (isPasswordHidden) {
    passwordInput.type = "text";
    togglePasswordIcon.classList.remove("fa-eye-slash");
    togglePasswordIcon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    togglePasswordIcon.classList.remove("fa-eye");
    togglePasswordIcon.classList.add("fa-eye-slash");
  }
});

                  // Password validation 
function validatePassword(passwordValue) {
  const hasLowercase = /[a-z]/.test(passwordValue);
  const hasUppercase = /[A-Z]/.test(passwordValue);
  const hasNumber = /[0-9]/.test(passwordValue);
  const hasLength =
  passwordValue.length >= 8 && passwordValue.length <= 15;

  return hasLowercase && hasUppercase && hasNumber && hasLength;
}

  
                    // Validate password on input
  passwordInput.addEventListener("input", () => {

  const passwordValue = passwordInput.value;
    
  if (passwordValue.length === 0) {
    passwordError.classList.add("hidden");
    return;
  }

  const isValid = validatePassword(passwordValue);
 
   if (isValid) {
      passwordError.classList.add("hidden");
    }

    });


// Final validation when the user clicks the Login button
     form.addEventListener("submit", (event) => {
    const passwordValue = passwordInput.value;
    const isValid = validatePassword(passwordValue);

          // Show validation rules to the user
    if (!isValid) {
      event.preventDefault();

      passwordError.textContent =
        "Password must contain at least one uppercase letter, one lowercase letter, one number and be 8–15 characters long.";

      passwordError.classList.remove("hidden");
    }
  

});
              
             


});








