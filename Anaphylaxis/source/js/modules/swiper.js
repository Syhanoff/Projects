import Swiper from 'swiper/bundle';



const swiper = new Swiper('.partners__slider', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  //   draggable: true,
  // },
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  hashNavigation: {
    watchState: true
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
		pageUpDown: true
  },
  slidesPerView: 'auto',
  watchOverflow: true,
  spaceBetween : 50,
  slidesPerGroup: 1,
  centeredSlides: true,
  speed : 800,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    577: {
      slidesPerView: 'auto',
      spaceBetween: 30
    },
    992: {
      slidesPerView: 'auto',
      spaceBetween: 50
    }
  },
});
