
                       // Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {

                   // Select elements from HTML
  const passwordInput = document.querySelector("#password");
  const passwordError = document.querySelector('.password-error');
   const form = document.querySelector(".login-container");

  
                    // Validate password on input
  passwordInput.addEventListener("input", () => {

  const passwordValue = passwordInput.value;
  const isValid = validatePassword(passwordValue);

  console.log(isValid);
 
   if (isValid) {
      passwordError.classList.add("hidden");
    }
    });

// Final validation when the user clicks the Login button
     form.addEventListener("submit", (e) => {
    const passwordValue = passwordInput.value;
    const isValid = validatePassword(passwordValue);

    if (!isValid) {
      e.preventDefault();
      
              // Show validation rules to the user
      passwordError.textContent =
        "Password must contain at least one uppercase letter, one lowercase letter, one number and be 8–15 characters long.";

      passwordError.classList.remove("hidden");
    }
  

});
                // Password validation rules
function validatePassword(passwordValue) {
  const hasLowercase = /[a-z]/.test(passwordValue);
  const hasUppercase = /[A-Z]/.test(passwordValue);
  const hasNumber = /[0-9]/.test(passwordValue);
  const hasLength =
  passwordValue.length >= 8 && passwordValue.length <= 15;

  return hasLowercase && hasUppercase && hasNumber && hasLength;
}

             


});








