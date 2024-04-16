window.addEventListener("load", function () {
  var review = new Swiper(".reviewSwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    scrollbar: false,
    progressbar: {
      el: ".swiper-progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
