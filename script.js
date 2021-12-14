// window.addEventListener('scroll', function () {
//   var header = document.querySelector('header');
//   header.classList.toggle('sticky', window.scrollY > 0);
// });

// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onClick = () => {
//   navbar.classList.toggle('active');
// };

// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.background = "#ffa51f";
//   } else {
//     document.getElementById("navbar").style.background = "#ffa51f";
//   }
// }

var swiper = new Swiper('.review-slider', {
  spaceBetween: 20,
  loop: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
