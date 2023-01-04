// Date && Time
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let timeString = date.toLocaleString("en-AU", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

document.getElementById(
  "c-footer__time"
).innerText = `${timeString.toUpperCase()}`;

document.getElementById("c-footer__date").innerText = `${day}/${month}/${year}`;

// Windows Menu

let windowsMenu = document.getElementById("c-footer__menu__icon");
let menu = document.getElementById("c-windows__menu");
let body = document.querySelector("body");

windowsMenu.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
