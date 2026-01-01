const nameInput = document.getElementById("userName");
const ageInput = document.getElementById("userAge");
const btn = document.getElementById("submitBtn");
const message = document.getElementById("message");

btn.addEventListener("click", function () {
    message.textContent = "Вие успешно добавихте данните. Благодарим!";
});
