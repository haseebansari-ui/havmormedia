"use strict"

// ===============
// 	Scroll Header
// ===============

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("h-scroll");
  } else {
    header.classList.remove("h-scroll");
  }
});



