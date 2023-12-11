const button = document.querySelector(".burger_button");
const menu = document.querySelector(".burger_menu");
const closeButton = document.querySelector(".burger_menu_x");

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

// <<<<<<<<<<<<<<<<<<<< <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   //

const email = document.getElementById("email");
const title = document.getElementById("title");
const message = document.getElementById("message");
const emailContainer = document.getElementById("email-container");
const titleContainer = document.getElementById("title-container");
const messageContainer = document.getElementById("message-container");
const form = document.getElementById("form");

const elements = [
  [email, emailContainer],
  [title, titleContainer],
  [message, messageContainer],
];

form.addEventListener("submit", (e) => {
  let hasErrors = false;

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (
    email.value == "" ||
    email.value == null ||
    !emailRegex.test(email.value.trim())
  ) {
    emailContainer.classList.add("not-empty", "invalid");
    hasErrors = true;
  }

  elements.slice(1).forEach(([element, container]) => {
    if (element.value == "" || element.value == null) {
      container.classList.add("not-empty");
      hasErrors = true;
    }
  });

  if (hasErrors) {
    e.preventDefault();
    return false;
  } else {
    console.log("Form submitted successfully");
    return true;
  }
});

elements.forEach((elements) => {
  elements[0].addEventListener("focus", () => {
    if (elements[1].classList.contains("not-empty"))
      elements[1].classList.remove("not-empty");
  });

  elements[0].addEventListener("blur", () => {
    if (elements[0].value == "" || elements[0].value == null) {
      if (!elements[1].classList.contains("not-empty"))
        elements[1].classList.add("not-empty");
    }
  });
});

email.addEventListener("blur", () => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.value != "" || email.value != null) {
    if (emailRegex.test(email.value.trim())) {
      emailContainer.classList.remove("invalid");
    } else {
      emailContainer.classList.add("invalid");
    }
  }
});

title.addEventListener("blur", () => {
  if (title.value == "" || title.value == null) {
    titleContainer.classList.add("not-empty");
  }
});

title.addEventListener("focus", () => {
  if (titleContainer.classList.contains("not-empty"))
    titleContainer.classList.remove("not-empty");
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< //

const contactForm = document.querySelector(".contact_form");

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

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = contactForm.querySelector("#username");
  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  try {
    testValid(userName, pattern);
    console.log("Forma OK");
  } catch (error) {
    console.log(error.message);
  }
});

// <><><><><><><><><><> Circles <><><>><><><><><><><><><>><><><><><><><> //

const circle = document.querySelector(".circle_top");
const burgerCircle = document.querySelector(".circle_burger_menu");

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
