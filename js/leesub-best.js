window.addEventListener("load", function () {
  // 지역 스와이퍼
  var swRecom = new Swiper(".sw-recom-conts", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      760: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
  // ===================================================
  // 모달 후기 맛집 / 시장 버튼 클릭 시
  const chooseBtRest = document.getElementById("chooseBtRest");
  const chooseBtMarket = document.getElementById("chooseBtMarket");
  const checkBoxRest = document.querySelector(".check-box-rest");
  const checkBoxMarket = document.querySelector(".check-box-market");
  console.log(checkBoxRest);
  // 초기 설정: chooseBtRest는 bold로, checkBoxRest는 보이게 설정
  chooseBtRest.style.fontWeight = "bold";
  chooseBtRest.style.boxShadow = "0 0 0 1px #191919 inset";
  checkBoxRest.style.display = "block";
  // chooseBtRest 클릭 시
  chooseBtRest.addEventListener("click", function () {
    // chooseBtRest 스타일 변경
    chooseBtRest.style.fontWeight = "bold";
    chooseBtRest.style.boxShadow = "0 0 0 1px #191919 inset";
    // checkBoxRest 보이기
    checkBoxRest.style.display = "block";
    // chooseBtMarket 스타일 원래대로 변경
    chooseBtMarket.style.fontWeight = "";
    chooseBtMarket.style.boxShadow = "none";
    // checkBoxMarket 감추기
    checkBoxMarket.style.display = "none";
  });
  // chooseBtMarket 클릭 시
  chooseBtMarket.addEventListener("click", function () {
    // chooseBtMarket 스타일 변경
    chooseBtMarket.style.fontWeight = "bold";
    chooseBtMarket.style.boxShadow = "0 0 0 1px #191919 inset";
    // checkBoxMarket 보이기
    checkBoxMarket.style.display = "block";
    // chooseBtRest 스타일 원래대로 변경
    chooseBtRest.style.fontWeight = "";
    chooseBtRest.style.boxShadow = "none";
    // checkBoxRest 감추기
    checkBoxRest.style.display = "none";
  });
  // ===================================================
});
// ============================ 제이쿼리 (모달창 지역 선택)
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
// ============================ 모달창 지역 선택 끝
function uncheckAll(checkboxes) {
  checkboxes.forEach((chk) => {
    chk.checked = false;
  });
}
function checkTaste(element) {
  uncheckAll(document.getElementsByName("taste"));
  element.checked = true;
}
function checkPrice(element) {
  uncheckAll(document.getElementsByName("price"));
  element.checked = true;
}
function checkRestService(element) {
  uncheckAll(document.getElementsByName("rest_service"));
  element.checked = true;
}
function checkAccessibility(element) {
  uncheckAll(document.getElementsByName("accessibility"));
  element.checked = true;
}
function checkEntertainment(element) {
  uncheckAll(document.getElementsByName("entertainment"));
  element.checked = true;
}
function checkMarketService(element) {
  uncheckAll(document.getElementsByName("market_service"));
  element.checked = true;
}
$(document).ready(function () {
  // 별점
  $(".review-stars > .star").click(function () {
    $(this).parent().children("span").removeClass("on");
    $(this).addClass("on").prevAll("span").addClass("on");
    var value = $(this).data("value");
    console.log("Selected rating:", value);
  });
  // 글자 수 세기
  $(".review-write-title textarea").keyup(function (e) {
    let content = $(this).val();
    // 글자수 세기
    if (content.length == 0 || content == "") {
      $(".textCount").text("0자");
    } else {
      $(".textCount").text(content.length + "자");
    }
    // 글자수 제한
    if (content.length > 5000) {
      // 5000자 부터는 타이핑 되지 않도록
      $(this).val($(this).val().substring(0, 5000));
    }
  });
  // 모달 열기
  // 리뷰 쓰기 클릭 시 모달 열기
  $("#reviewModal").click(function () {
    $("#myModal").fadeIn();
    resetModalContent(); // 모달 열 때 내용 초기화
  });
  // 모달 닫기 버튼 클릭 시 모달 닫기
  $(".md-top-close").click(function () {
    confirmExit();
    resetModalContent(); // 모달 닫을 때 내용 초기화
  });
  // 모달 외부 클릭 시 모달 닫기
  $(window).click(function (e) {
    if (e.target == document.getElementById("myModal")) {
      confirmExit();
      resetModalContent(); // 모달 닫을 때 내용 초기화
    }
  });
  // 나가기 확인 함수
  function confirmExit() {
    if (confirm("작성한 내용이 지워집니다. 나가시겠습니까?")) {
      $("#myModal").fadeOut();
    }
  }
  // 모달 내용 초기화 함수
  function resetModalContent() {
    // 입력 필드 초기화
    $("#myModal input[type='text']").val("");
    $("#myModal textarea").val("");
    // 체크박스 초기화
    $("#myModal input[type='checkbox']").prop("checked", false);
    // 이미지 미리보기 초기화
    $("#myModal .image-preview").empty();
  }
});
