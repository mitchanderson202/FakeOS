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
  "footer__time"
).innerText = `${timeString.toUpperCase()}`;

document.getElementById("footer__date").innerText = `${day}/${month}/${year}`;

// Windows Menu

let windowsMenu = document.getElementById("footerMenuIcon");
let menu = document.getElementById("windows__menu");
let body = document.querySelector("body");

windowsMenu.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

// Desktop Items

let img1 = document.getElementById("binImg");
let img2 = document.getElementById("steamImg");
let img3 = document.getElementById("vscodeImg");
let modal1 = document.querySelector(".modal1");
let modal2 = document.querySelector(".modal2");
let modal3 = document.querySelector(".modal3");
let closeModal1 = document.getElementById("close-btn1");
let closeModal2 = document.getElementById("close-btn2");
let closeModal3 = document.getElementById("close-btn3");

img1.addEventListener("click", () => {
  img1.style.border = "1px dotted white";
  img2.style.border = "";
  img3.style.border = "";

  img1.style.background = "rgb(112, 112, 112)";
  img2.style.background = "";
  img3.style.background = "";
});

img2.addEventListener("click", () => {
  img2.style.border = "1px dotted white";
  img1.style.border = "";
  img3.style.border = "";

  img2.style.background = "rgb(112, 112, 112)";
  img1.style.background = "";
  img3.style.background = "";
});

img3.addEventListener("click", () => {
  img3.style.border = "1px dotted white";
  img1.style.border = "";
  img2.style.border = "";

  img3.style.background = "rgb(112, 112, 112)";
  img1.style.background = "";
  img2.style.background = "";
});

img1.addEventListener("dblclick", () => {
  modal1.style.display = "block";
  img2.style.border = "";
  img1.style.border = "";
  img3.style.border = "";
  img2.style.background = "";
  img1.style.background = "";
  img3.style.background = "";
});

closeModal1.addEventListener("click", () => {
  modal1.style.display = "none";
});

closeModal2.addEventListener("click", () => {
  modal2.style.display = "none";
});

closeModal3.addEventListener("click", () => {
  modal3.style.display = "none";
});

img2.addEventListener("dblclick", () => {
  modal2.style.display = "block";
  img2.style.border = "";
  img1.style.border = "";
  img3.style.border = "";
  img2.style.background = "";
  img1.style.background = "";
  img3.style.background = "";
});

img3.addEventListener("dblclick", () => {
  modal3.style.display = "block";
  img2.style.border = "";
  img1.style.border = "";
  img3.style.border = "";
  img2.style.background = "";
  img1.style.background = "";
  img3.style.background = "";
});

// reading
//  https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/getData
// https://www.w3schools.com/html/html5_draganddrop.asp#:~:text=In%20HTML%2C%20any%20element%20can%20be%20dragged%20and%20dropped.
