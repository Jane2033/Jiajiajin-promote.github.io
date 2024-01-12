var swiper = new Swiper(".swiper-content", {
    slidesPerView: 3,
    spaceBetween: 100,
    loop: true,
    grabCursor: 'true',
    navigation: {
      nextEl: ".myswiper-button-next",
      prevEl: ".myswiper-button-prev",
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 50
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 50
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 100
          },
      }
  });