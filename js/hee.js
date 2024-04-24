window.addEventListener("load", function () {
  // 메인 배너 스와이퍼
  var bannerSwiper = new Swiper(".bannerSwiper", {
    loop: true,
    navigation: {
      nextEl: ".banner-button-next",
      prevEl: ".banner-button-prev",
    },
    autoplay: {
      delay: 2500, // 자동 재생 간격 설정 (5초)
    },
    speed: 700, // 부드러운 넘김 효과를 위한 속도 조정
    // on: {
    //   slideChange: function () {
    //     var currentIndex = this.realIndex;
    //     var backgroundColors = ["#FFFBF4", "#FFEB86"]; // 각 슬라이드에 대한 배경색 예시
    //     var bannerElement = document.querySelector(".banner");

    //     if (currentIndex === 0) {
    //       // 첫 번째 슬라이드일 때 배경 이미지 적용
    //       bannerElement.style.backgroundImage = "url('images/2banner/banner-background-1.png')";
    //       bannerElement.style.backgroundRepeat = "no-repeat";
    //       bannerElement.style.backgroundPosition = "center";
    //       bannerElement.style.backgroundSize = "cover";
    //     } else {
    //       // 나머지 슬라이드일 때 배경색 적용
    //       bannerElement.style.backgroundImage = "none"; // 배경 이미지 제거
    //       bannerElement.style.backgroundColor = backgroundColors[currentIndex - 1];
    //     }
    //   },
    // },
  });

  // ======================================
  // 리뷰 스와이퍼
  var reviewSwiper = new Swiper(".reviewSwiper", {
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 2500, // 자동 재생 간격 설정 (5초)
    },
    speed: 700, // 부드러운 넘김 효과를 위한 속도 조정
    pagination: {
      el: ".swiper-pagination-review1",
      clickable: true,
      // renderBullet: function (index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + "</span>";
      // },
    },
    // navigation: {
    //   nextEl: ".review .swiper-button-next",
    //   prevEl: ".review .swiper-button-prev",
    // },
    navigation: {
      nextEl: ".review .swiper-button-next-review1",
      prevEl: ".review .swiper-button-prev-review1",
    },
    breakpoints: {
      1200: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });

  var reviewSwiper2 = new Swiper(".reviewSwiper2", {
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 2500, // 자동 재생 간격 설정 (5초)
    },
    speed: 700, // 부드러운 넘김 효과를 위한 속도 조정
    pagination: {
      el: ".swiper-pagination-review2",
      clickable: true,
      // renderBullet: function (index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + "</span>";
      // },
    },
    navigation: {
      nextEl: ".swiper-button-next-review2",
      prevEl: ".swiper-button-prev-review2",
    },
    breakpoints: {
      1200: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });

  // // 텍스트 다르게
  // const items = document.querySelectorAll(".market-day-content li a");
  // const texts = ["포항", "정선", "보성", "동해"]; // 각 이미지에 대한 텍스트 데이터

  // items.forEach((item, index) => {
  //   const text = texts[index]; // 해당 이미지에 대한 텍스트
  //   const circle = document.createElement("div");
  //   circle.textContent = text;
  //   circle.className = "circle";

  //   // .market-day-content li::after에 파란색 원 추가
  //   const afterElement = document.createElement("div");
  //   afterElement.className = "circle-after";
  //   item.appendChild(afterElement);

  //   // .market-day-content li::after에 텍스트 추가
  //   afterElement.appendChild(circle);
  // });

  // // .allDays에도 똑같이 적용
  // const allDaysItems = document.querySelectorAll(".allDays li a");
  // const texts2 = ["광주", "대구", "서울", "포항"];
  // allDaysItems.forEach((item, index) => {
  //   const text = texts2[index]; // 해당 이미지에 대한 텍스트

  //   // 파란색 원 추가
  //   const circle = document.createElement("div");
  //   circle.textContent = text;
  //   circle.className = "circle";

  //   // .market-day-content li::after에 파란색 원 추가
  //   const afterElement = document.createElement("div");
  //   afterElement.className = "circle-after";
  //   item.appendChild(afterElement);

  //   // .market-day-content li::after에 텍스트 추가
  //   afterElement.appendChild(circle);
  // });

  //=====================
  // //중간 배너 이미지 변경
  // // 이미지 변경을 담당할 함수
  // function changeBannerImage() {
  //   const screenWidth = window.innerWidth; // 현재 브라우저의 가로 너비

  //   // 768px 이하의 화면 너비인 경우
  //   if (screenWidth <= 768) {
  //     document.querySelector(".banner-img").src = "images/hee/banner-m-768px.png";
  //   } else {
  //     // 768px 초과인 경우
  //     document.querySelector(".banner-img").src = "images/hee/banner-m.png";
  //   }
  // }

  // // 화면 크기 변경 시 이미지 변경
  // window.addEventListener("resize", changeBannerImage);

  // // 페이지 로드 시 이미지 변경 함수 호출
  // changeBannerImage();
  // ====================================================
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
  // const marketBtnItem = document.querySelectorAll(".title-btn");
  // // ul card 하나하나를 모두 담는다.
  // const marketContents = document.querySelectorAll(".market-day-content");
  // marketBtnItem.forEach(function (marketBtnItems, index) {
  //   marketBtnItems.addEventListener("click", function () {
  //     showMarketCon(index);
  //   });
  // });
  // showMarketCon(0);
  // // 카드 보여주는 기능
  // function showMarketCon(index) {
  //   // 여러개일 때는 forEach
  //   // 여기서 'item'은 ul.card 하나하나를 의미한다.
  //   marketContents.forEach(function (market) {
  //     market.classList.remove("active");
  //   });
  //   marketBtnItem.forEach((item) => {
  //     item.classList.remove("active");
  //   });

  //   marketBtnItem[index].classList.add("active");
  //   marketContents[index].classList.add("active");
  // }

  // =========================================================
});

// window.addEventListener("resize", function () {
//   var bannerImage = document.getElementById("bannerImage");
//   if (window.innerWidth <= 500) {
//     bannerImage.src = "images/6banner-m/banner-m-768px.png";
//   } else {
//     bannerImage.src = "images/6banner-m/banner-m-1200.png";
//   }
// });

// ===========================================================
// 제이쿼리
$(function () {
  // 장날 안내: 버튼 클릭 색깔
  $(".market-btn-color").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    // $(".market-btn-color").removeClass("on");
    // $(this).addClass("on");
  });

  // 방문 후기: 버튼 클릭 색깔
  $(".reveiw-btn-color").click(function () {
    // $(this).addClass("on").siblings().removeClass("on");
    $(".reveiw-btn-color").removeClass("on");
    $(this).addClass("on");
  });

  // 장날 안내: 버튼 클릭 이벤트
  $(".market-btn-color:nth-child(1)").click(function () {
    $(".day5").show();
    $(".allDays").hide();
  });

  $(".market-btn-color:nth-child(2)").click(function () {
    $(".day5").hide();
    $(".allDays").show().css("opacity", 1).css("display", "flex");
  });

  // 방문 후기: 버튼 클릭 이벤트
  $(".reveiw-btn-color:nth-child(1)").click(function () {
    $(".reviewSwiper").show();
    $(".reviewSwiper2").hide();
  });

  $(".reveiw-btn-color:nth-child(2)").click(function () {
    $(".reviewSwiper").hide();
    $(".reviewSwiper2").show();
  });
});
