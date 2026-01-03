const nameInput = document.getElementById("userName");
const ageInput = document.getElementById("userAge");
const btn = document.getElementById("submitBtn");
const message = document.getElementById("message");


if (btn) {
  btn.addEventListener("click", function () {
    message.textContent = "You have successfully added the data. Thank you.";
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const sideMenu = document.querySelector(".side-menu");

if (menuToggle && sideMenu) {
  menuToggle.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
  });
}

document.addEventListener("click", (event) => {
    if (
      sideMenu.classList.contains("open") &&
      !sideMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      sideMenu.classList.remove("open");
    }
  });
