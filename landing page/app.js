const togglebtn = document.querySelector(`.sidebar-toggle`);
const sidebar = document.querySelector(`.sidebar`);
const closebtn = document.querySelector(`.close-btn`);

togglebtn.addEventListener(`click`, function () {
 sidebar.classList.toggle(`show-sidebar`);
});

closebtn.addEventListener(`click`, function () {
  sidebar.classList.remove(`show-sidebar`); 
});


var swiper = new Swiper(".back-in", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

var Swiper = new Swiper(".trend-con", {
  slidesPerView: 3,
  spaceBetween: 5,
  centeredSlides: true,
  loop: true,
  fade: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints :{
  0: {
    slidesPerView: 3,
  },
  1210: {
    slidesPerView: 4,
 
  // 800: {
  //   slidesPerView: 6,
  //   spaceBetween: 0,
  // },
  },

},

});


var typed = new Typed(".auto-input", {
  strings: [ " hiteriors ", " home of designs", "home of comfort"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true

});

ScrollReveal({ 
  //   reset: true,
    distance:`60px`,
    duration:2500,
    delay:400,
     }); 

     // to target elements and animations delay
     ScrollReveal().reveal(`.trend`, { delay: 500, origin:`left`, reset:true });

ScrollReveal().reveal(`.contact,form contact-form, .vid`, { delay: 600, origin:`bottom`, reset:true });

ScrollReveal().reveal(`.news`, { delay: 650, origin:`right` , reset:true});

ScrollReveal().reveal(`.socia, .high`, { delay: 500, origin:`right`,interval:200, reset:true });

ScrollReveal().reveal(`.hi`, { delay: 500, origin:`bottom` , reset:true });


