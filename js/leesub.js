window.addEventListener("load", function () {
  // 지역 스와이퍼
  var swName = new Swiper(".sw-name", {
    slidesPerView: 2,
    spaceBetween: 20,
    // responsive 옵션을 사용하여 너비에 따라 슬라이드 수 조정
    breakpoints: {
      // 1000px 이하일 때
      940: {
        slidesPerView: 12,
        spaceBetween: 20,
      },
      870: {
        slidesPerView: 11,
        spaceBetween: 20,
      },
      // 530px 이하일 때
      810: {
        slidesPerView: 10,
        spaceBetween: 20,
      },
      745: {
        slidesPerView: 9,
        spaceBetween: 20,
      },
      670: {
        slidesPerView: 8,
        spaceBetween: 20,
      },
      590: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
      520: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      450: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      370: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      300: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".sw-name-next",
      prevEl: ".sw-name-prev",
    },
  });
  //   축제 스와이퍼
  var mainSwiper = new Swiper(".sw-sub-festival", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
  //   var pagingSwiper = new Swiper(".sw-sub-festival", {
  //     slidesPerView: 3,
  //     spaceBetween: 10,
  //     pagination: {
  //       el: ".swiper-pagination2",
  //       type: "progressbar",
  //     },
  //   });
  //   mainSwiper.controller.control = pagingSwiper;
  // =============================================
});
// ============================ 제이쿼리
$(window).on("load", function () {
  selectCus();
});
function selectCus() {
  $(".select_cus").each(function () {
    const $select = $(this);
    const $selectTrigger = $select.find(".trigger");
    const $options = $select.find(".option");
    const $hiddenInput = $select.find(".opt_val");
    const $defaultOption = $options.find("li[selected]");
    //select option 열기
    $selectTrigger.click(function () {
      $options.toggle();
      $select.toggleClass("active");
      $(".select_cus").not($select).find(".option").hide();
      $(".select_cus").not($select).removeClass("active");
      // .option 요소의 border-radius 변경
      if ($select.hasClass("active")) {
        $selectTrigger.css("border-radius", "5px 5px 0 0");
        $options.css("border-radius", "0 0 5px 5px");
      } else {
        $selectTrigger.css("border-radius", "");
        $options.css("border-radius", "");
      }
    });
    //option 선택
    $options.find("li").click(function () {
      const value = $(this).data("value");
      const text = $(this).text();
      $select.find(".trigger_txt").text(text);
      $options.hide();
      $select.removeClass("active");
      //옵션을 선택했을 때 .select_cus .trigger의 border-radius를 5px로 설정
      $selectTrigger.css("border-radius", "5px");
      //옵션 선택했을 때 클래스 추가
      if (value != "") {
        $select.addClass("select");
      } else {
        $select.removeClass("select");
      }
      // hidden 필드에 선택한 값을 설정
      $hiddenInput.val(value);
    });
  });
  //select 영역 외 다른곳을 누르면 select 닫힘
  $(document).click(function (e) {
    if (!$(e.target).closest(".select_cus").length) {
      $(".select_cus .option").hide();
      $(".select_cus").removeClass("active");
      // 영역 외 다른 곳을 클릭했을 때 .select_cus .trigger의 border-radius를 5px로 설정
      $(".select_cus .trigger").css("border-radius", "5px");
    }
  });
}
