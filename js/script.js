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

// test Section Js

const items = document.querySelectorAll(".service-item");

items.forEach(item => {

    item.addEventListener("mouseenter", () => {

        previewImage.style.opacity = "0";

        setTimeout(() => {
            previewImage.src = item.dataset.img;
            previewImage.style.opacity = "1";
        }, 300);

    });

});

// accordian


const labels = document.querySelectorAll('.prss-title');

labels.forEach((item)=>{
  item.addEventListener("click", ()=>{
    const parent = item.parentElement;

    const closeAcc = document.querySelectorAll('.process-cntnt-bx');

    closeAcc.forEach((close)=>{
      close.addEventListener("click", () =>{
        if(close !== parent){
          parent.classList.remove('active');
        }
      })
    })

    
    parent.classList.toggle('active');
    
  })
})




