const button = document.querySelector(".burger_button");
const menu = document.querySelector(".burger_menu");
const closeButton = document.querySelector(".burger_menu_x");
const circle = document.querySelector(".circle_top");
const burgerCircle = document.querySelector(".circle_burger_menu");

document.body.addEventListener("click", function (event) {
  if (button.contains(event.target)) {
    menu.classList.toggle("burger_menu_hidden");
    return;
  }
  if (closeButton.contains(event.target)) {
    menu.classList.toggle("burger_menu_hidden");
    return;
  }

  if (menu.contains(event.target)) {
    return;
  } else {
    menu.classList.remove("burger_menu_hidden");
  }
});

addEventListener("scroll", () => {
  menu.classList.remove("burger_menu_hidden");
});

// <><><><><><><><><><> Circles <><><>><><><><><><><><><>><><><><><><><> //

let wi = 780 + (window.innerWidth - 375) * 0.43;
let circlePosition = (window.innerWidth - wi) / 2;
let burgerLeft =
  (window.innerWidth - wi) / 2 - (window.innerWidth / 100) * 20.2;
let burgerLeftBig = -255 - (window.innerWidth - 625) * 0.70422535;

circle.style.width = `${wi}px`;
circle.style.height = `${wi}px`;
circle.style.borderRadius = `${wi}px`;
circle.style.left = `${circlePosition}px`;
burgerCircle.style.width = `${wi}px`;
burgerCircle.style.height = `${wi}px`;
burgerCircle.style.borderRadius = `${wi}px`;

if (window.innerWidth < 625) {
  burgerCircle.style.left = `${burgerLeft}px`;
} else {
  burgerCircle.style.left = `${burgerLeftBig}px`;
}

window.addEventListener("resize", myFunction);

function myFunction() {
  let wi = 780 + (window.innerWidth - 375) * 0.43;
  let circlePosition = (window.innerWidth - wi) / 2;
  let burgerLeft =
    (window.innerWidth - wi) / 2 - (window.innerWidth / 100) * 20.2;

  let burgerLeftBig = -255 - (window.innerWidth - 625) * 0.70422535;

  circle.style.width = `${wi}px`;
  circle.style.height = `${wi}px`;
  circle.style.borderRadius = `${wi}px`;
  circle.style.left = `${circlePosition}px`;
  burgerCircle.style.width = `${wi}px`;
  burgerCircle.style.height = `${wi}px`;
  burgerCircle.style.borderRadius = `${wi}px`;

  if (window.innerWidth < 625) {
    burgerCircle.style.left = `${burgerLeft}px`;
  } else {
    burgerCircle.style.left = `${burgerLeftBig}px`;
  }
}
