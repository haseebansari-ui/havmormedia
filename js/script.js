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


const labels = document.querySelectorAll('.acc-label');

labels.forEach((item)=>{
  item.addEventListener("click", ()=>{
    const parent = item.parentElement;

    const closeAcc = document.querySelectorAll('.acc-bx');

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



// Scroll Reveal

document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.classList.contains('stat-card') || entry.target.classList.contains('global-stat-card')) {
          animateCounter(entry.target.querySelector('.stat-counter'));
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));

  function animateCounter(counter) {
    if (!counter || counter.dataset.animated) return;
    counter.dataset.animated = 'true';

    const target = parseInt(counter.getAttribute('data-target'));
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 80));

    const updateCounter = () => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = current;
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  }

  document.querySelectorAll('.stat-card, .global-stat-card').forEach(card => observer.observe(card));

  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.style.transform = 'translateY(-2px) scale(1.02)');
    btn.addEventListener('mouseleave', () => btn.style.transform = 'translateY(0) scale(1)');
  });
});



