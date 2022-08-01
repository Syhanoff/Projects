import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

const swiper = new Swiper('.partners__slider', {
  slidesPerView: 3,
  // centeredSlides: true,
  spaceBetween: 50,
  // watchOverflow: true,
  loop: true,
  // stopOnLastSlide : false,
	// speed : 500,
	// autoplay: {
		// delay: 3000,
	// },
  navigation: {
    nextEl: ".partners__navigation_next",
    prevEl: ".partners__navigation_prev"
  }
});
