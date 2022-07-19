var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 5,
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: 0,
  autoplay: {
      delay: 99999999999999,
      disableOnInteraction: false,
      reverseDirection: true,
  },

  breakpoints: {
      1280: {
          slidesPerView: 5,
      },

      900: {
          slidesPerView: 4,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          },
      },

      500: {
          slidesPerView: 3,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          },
      },

      320: {
          slidesPerView: 2,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          }
      },

      0: { 
        slidesPerView: 1,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
      }
      },
  }
});
