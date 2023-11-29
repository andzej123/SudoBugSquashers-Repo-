const button = document.querySelector(".burger_button");
const menu = document.querySelector(".burger_menu");
const closeButton = document.querySelector(".burger_menu_x");

const myFunction = () => {
    menu.classList.toggle("burger_menu_hidden");
}

button.addEventListener("click", myFunction);
closeButton.addEventListener("click", myFunction);