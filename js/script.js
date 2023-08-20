const buttons = document.querySelectorAll(".depends-os>span");
let OSName = "";

if (window.navigator.userAgent.indexOf("Windows") != -1) OSName = "Windows";
if (window.navigator.userAgent.indexOf("Mac") != -1) OSName = "Mac";
if (window.navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";

for (const button of buttons) {
  button.innerText = `Download for ${OSName}`;
}

const closeBtn = document.querySelector(".closeBtn");
const hamburgerNav = document.querySelector(".hamburger-navbar");

closeBtn.addEventListener("click", () => {
  hamburgerNav.style.transform = "translateX(100%)";
});

const hamburgerBtn = document.querySelector(".hamburger-btn");

hamburgerBtn.addEventListener("click", () => {
  hamburgerNav.style.transform = "translateX(0)";
});

const mediaQuery = window.matchMedia("(min-width: 1024px)");
mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    hamburgerNav.style.transform = "translateX(100%)";
  }
});
