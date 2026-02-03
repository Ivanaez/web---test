const nameInput = document.getElementById("userName");
const ageInput = document.getElementById("userAge");
const btn = document.getElementById("submitBtn");
const message = document.getElementById("message");


if (btn) {
  btn.addEventListener("click", function () {
    message.textContent = "You have successfully added the data. Thank you.";

  });
}

const menuToggle = document.querySelector(".button-toggle");
const sideMenu = document.querySelector(".menu");

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

                                                    // Close menu button handler
  const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.menu-close');

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
});

                                                   // Popular cards scroll buttons
const cardsContainer = document.querySelector('.popular-cards');
const btnLeft = document.querySelector('.scroll-btn.left');
const btnRight = document.querySelector('.scroll-btn.right');

const scrollAmount = 320;

btnLeft.addEventListener('click', () => {
  cardsContainer.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

btnRight.addEventListener('click', () => {
  cardsContainer.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});
                                                    // Drag-to-scroll (Desktop only)
const slider = document.querySelector('.popular-cards');

let isDown = false;
let startX = 0;
let startScrollLeft = 0;
let moved = false;

function isDesktop() {
  return window.innerWidth >= 1024;
}

slider.addEventListener('mousedown', (e) => {
  if (!isDesktop()) return;
  if (e.button !== 0) return; 

  isDown = true;
  moved = false;
  slider.classList.add('dragging');

  startX = e.pageX;
  startScrollLeft = slider.scrollLeft;
});

window.addEventListener('mouseup', () => {
  if (!isDown) return;
  isDown = false;
  slider.classList.remove('dragging');

 
  setTimeout(() => (moved = false), 0);
});

window.addEventListener('blur', () => {
  
  isDown = false;
  slider.classList.remove('dragging');
  moved = false;
});

window.addEventListener('mousemove', (e) => {
  if (!isDesktop()) return;
  if (!isDown) return;

  
  if (e.buttons !== 1) {
    isDown = false;
    slider.classList.remove('dragging');
    return;
  }

  e.preventDefault();

  const dx = e.pageX - startX;
  if (Math.abs(dx) > 5) moved = true; 

  const speed = 1.5;
  slider.scrollLeft = startScrollLeft - dx * speed;
});


slider.addEventListener(
  'click',
  (e) => {
    if (!isDesktop()) return;
    if (!moved) return;

    e.preventDefault();
    e.stopPropagation();
  },
  true
);
 
