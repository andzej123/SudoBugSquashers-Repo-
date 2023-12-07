// NAV
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
// FOOTER
const myFunction = () => {
    menu.classList.toggle("burger_menu_hidden");
}




