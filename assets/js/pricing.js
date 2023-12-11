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

let burgerLeft = -5 - (window.innerWidth - 375) * 0.2;
let burgerLeftBig = -55 - (window.innerWidth - 625) * 0.9859154929577465;

if (window.innerWidth < 625) {
  burgerCircle.style.left = `${burgerLeft}px`;
} else {
  burgerCircle.style.left = `${burgerLeftBig}px`;
}

window.addEventListener("resize", myFunction);

function myFunction() {
  let burgerLeft = -5 - (window.innerWidth - 375) * 0.2;
  let burgerLeftBig = -55 - (window.innerWidth - 625) * 0.9859154929577465;

  if (window.innerWidth < 625) {
    burgerCircle.style.left = `${burgerLeft}px`;
  } else {
    burgerCircle.style.left = `${burgerLeftBig}px`;
  }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< //

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const pricingForm = document.querySelector(".pricing_form");

const testValid = (element, pattern) => {
  const elem = element;
  let errorMsg = elem.nextElementSibling;
  errorMsg.innerHTML = `Please enter a valid email`;
  setTimeout(function () {
    errorMsg.classList.add("hidden");
  }, 2000);
  if (!pattern.test(elem.value)) {
    errorMsg.classList.remove("hidden");
    throw new Error("klaida");
  } else {
    errorMsg.classList.add("hidden");
    errorMsg.innerHTML = `You just got demo send to ${elem.value}`;
    errorMsg.classList.remove("hidden");
    setTimeout(function () {
      errorMsg.classList.add("hidden");
      elem.value = "";
    }, 2000);
  }
};

pricingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = pricingForm.querySelector("#username");
  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  try {
    testValid(userName, pattern);
    console.log("Forma OK");
  } catch (error) {
    console.log(error.message);
  }
});
