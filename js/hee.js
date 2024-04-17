window.addEventListener("load", function () {
  var reviewSwiper = new Swiper(".reviewSwiper", {
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // pagination: {
  //   el: ".swiper-pagination2",
  //   type: "fraction",
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // var reviewPagingSwiper = new Swiper(".reviewSwiper", {
  //   slidesPerView: 5,
  //   spaceBetween: 25,

  //   loop: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "progressbar",
  //   },
  // });

  // reviewSwiper.controller.control = reviewPagingSwiper;

  // ============================================================================================
  // 장날 안내 버튼
  // 메뉴 하나하나를 모두 담는다.
  const marketBtnItem = document.querySelectorAll(".title-btn");
  // ul card 하나하나를 모두 담는다.
  const marketContents = document.querySelectorAll(".market-day-content");
  marketBtnItem.forEach(function (marketBtnItems, index) {
    marketBtnItems.addEventListener("click", function () {
      showMarketCon(index);
    });
  });
  showMarketCon(0);
  // 카드 보여주는 기능
  function showMarketCon(index) {
    // 여러개일 때는 forEach
    // 여기서 'item'은 ul.card 하나하나를 의미한다.
    marketContents.forEach(function (market) {
      market.classList.remove("active");
    });
    marketBtnItem.forEach((item) => {
      item.classList.remove("active");
    });

    marketBtnItem[index].classList.add("active");
    marketContents[index].classList.add("active");
  }
});

// ===========================================================
// 제이쿼리
$(function () {
  // 장날 안내: 버튼 클릭
  $(".market-btn-color").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    // $(".market-btn-color").removeClass("on");
    // $(this).addClass("on");
  });

  // 방문 후기: 버튼 클릭
  $(".reveiw-btn-color").click(function () {
    // $(this).addClass("on").siblings().removeClass("on");
    $(".reveiw-btn-color").removeClass("on");
    $(this).addClass("on");
  });

  // 방문 후기: 중간 리뷰 추가
  $(".");
});
