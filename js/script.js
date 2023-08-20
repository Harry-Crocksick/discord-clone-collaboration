const buttons = document.querySelectorAll(".depends-os>span");

let OSName = "";

if (window.navigator.userAgent.indexOf("Windows") != -1) OSName = "Windows";
if (window.navigator.userAgent.indexOf("Mac") != -1) OSName = "Mac";
if (window.navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";

for (const button of buttons) {
  button.innerText = `Download for ${OSName}`;
}
