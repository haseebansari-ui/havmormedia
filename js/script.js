"use strict"

// 	Scroll Header

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("h-scroll");
  } else {
    header.classList.remove("h-scroll");
  }
});

// Menue

const openMenueBtn = document.querySelector(".open-menue");
const closeMenueBtn = document.querySelector(".close-menue");
const openMenue = document.querySelector(".main-menu-bx");

if(openMenueBtn){
  openMenueBtn.addEventListener("click", () =>{
    openMenue.classList.add("active");
  }) 
}

if(closeMenueBtn){
  closeMenueBtn.addEventListener("click", () =>{
    openMenue.classList.remove("active");
  }) 
}

