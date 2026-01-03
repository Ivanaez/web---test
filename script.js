const nameInput = document.getElementById("userName");
const ageInput = document.getElementById("userAge");
const btn = document.getElementById("submitBtn");
const message = document.getElementById("message");

btn.addEventListener("click", function () {
    message.textContent = "Вие успешно добавихте данните. Благодарим!";
});
// Hamburger button
const menuToggle = document.querySelector('.menu-toggle');

// Side menu
const sideMenu = document.querySelector('.side-menu');

// Toggle menu on click
menuToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});
