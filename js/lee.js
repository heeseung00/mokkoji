window.addEventListener("load", function () {
  // 스크롤 다운 시 헤더 그림자 효과
  var header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("scrolled"); // 스크롤 내릴 때 scrolled 클래스 추가
    } else {
      header.classList.remove("scrolled"); // 스크롤 올릴 때 scrolled 클래스 제거
    }
  });
  // 헤더 검색창 열고 닫기
  const searchOpen = document.getElementById("search-open");
  const search = document.getElementById("search");
  const searchClose = document.getElementById("closeBt");
  const searchInput = document.getElementById("searchInput");
  searchOpen.addEventListener("click", function () {
    search.style.display = "block";
  });
  searchClose.addEventListener("click", function () {
    search.style.display = "none";
    searchInput.value = ""; // input 내용 리셋
  });
  // nav 메뉴 클릭 시 이름 옆에 점 생기기
  
  // ===============================================================
  // 대구 아이콘에 active 클래스 추가
  var daeguPinCont = document.querySelector(".map-pin-cont.daegu");
  daeguPinCont.classList.add("active");
  // 지역 아이콘 클릭 시 해당 지역 이름이 뜨고 핀 색 변경
  var pins = document.querySelectorAll(".map-pin-cont");
  pins.forEach(function (pin) {
    pin.addEventListener("click", function () {
      var isActive = this.classList.contains("active");
      pins.forEach(function (otherPin) {
        otherPin.classList.remove("active");
      });
      if (!isActive) {
        this.classList.add("active");
      }
    });
    pin.addEventListener("mouseleave", function () {
      var isActive = this.classList.contains("active");
      if (!isActive) {
        this.classList.remove("active");
      }
    });
  });
  // ==================================================================
  // 대구 핀 클릭 시 부산 배경 나오게 하기
  const mapPinDaegu = document.querySelector(".daegu");
  mapPinDaegu.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/3marketinfo/main_map_daegu.png")';
  });
  // 부산 핀 클릭 시 부산 배경 나오게 하기
  const mapPinBusan = document.querySelector(".busan");
  mapPinBusan.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/3marketinfo/main_map_busan.png")';
  });
  // 충북 핀 클릭 시 충북 배경 나오게 하기
  const mapPinChungbuk = document.querySelector(".chungbuk");
  mapPinChungbuk.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/3marketinfo/main_map_chungbuk.png")';
  });
  // 충남 핀 클릭 시 충님 배경 나오게 하기
  const mapPinChungnam = document.querySelector(".chungnam");
  mapPinChungnam.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/3marketinfo/main_map_chungnam.png")';
  });
  // 대전 핀 클릭 시 대전 배경 나오게 하기
  const mapPinDaejeon = document.querySelector(".daejeon");
  mapPinDaejeon.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/3marketinfo/main_map_daejeon.png")';
  });
  // 강원 핀 클릭 시 강원 배경 나오게 하기
  const mapPinGangwon = document.querySelector(".gangwon");
  mapPinGangwon.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/3marketinfo/main_map_gangwon.png")';
  });
  // 광주 핀 클릭 시 광주 배경 나오게 하기
  const mapPinGwangju = document.querySelector(".gwangju");
  mapPinGwangju.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/3marketinfo/main_map_gwangju.png")';
  });
  // 경북 핀 클릭 시 경북 배경 나오게 하기
  const mapPinGyeongbuk = document.querySelector(".gyeongbuk");
  mapPinGyeongbuk.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/3marketinfo/main_map_gyeongbuk.png")';
  });
  // 경기 핀 클릭 시 경기 배경 나오게 하기
  const mapPinGyeonggi = document.querySelector(".gyeonggi");
  mapPinGyeonggi.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/3marketinfo/main_map_gyeonggi.png")';
  });
  // 경남 핀 클릭 시 경남 배경 나오게 하기
  const mapPinGyeongnam = document.querySelector(".gyeongnam");
  mapPinGyeongnam.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/3marketinfo/main_map_gyeongnam.png")';
  });
  // 인천 핀 클릭 시 인천 배경 나오게 하기
  const mapPinIncheon = document.querySelector(".incheon");
  mapPinIncheon.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/3marketinfo/main_map_incheon.png")';
  });
  // 제주 핀 클릭 시 제주 배경 나오게 하기
  const mapPinJeju = document.querySelector(".jeju");
  mapPinJeju.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/3marketinfo/main_map_jeju.png")';
  });
  // 전북 핀 클릭 시 전북 배경 나오게 하기
  const mapPinJeonbuk = document.querySelector(".jeonbuk");
  mapPinJeonbuk.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/3marketinfo/main_map_jeonbuk.png")';
  });
  // 전남 핀 클릭 시 전남 배경 나오게 하기
  const mapPinJeonnam = document.querySelector(".jeonnam");
  mapPinJeonnam.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/3marketinfo/main_map_jeonnam.png")';
  });
  // 세종 핀 클릭 시 세종 배경 나오게 하기
  const mapPinSejong = document.querySelector(".sejong");
  mapPinSejong.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/3marketinfo/main_map_sejong.png")';
  });
  // 서울 핀 클릭 시 서울 배경 나오게 하기
  const mapPinSeoul = document.querySelector(".seoul");
  mapPinSeoul.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/3marketinfo/main_map_seoul.png")';
  });
  // 울산 핀 클릭 시 울산 배경 나오게 하기
  const mapPinUlsan = document.querySelector(".ulsan");
  mapPinUlsan.addEventListener("click", function () {
    const mapBg = document.querySelector(".map-bg");
    mapBg.style.backgroundImage = 'url("../images/3marketinfo/main_map_ulsan.png")';
  });
  // =====================================================================
  // 맛집 클릭 이벤트
  const bestBtn = document.getElementById("bestBtn");
  const famousBtn = document.getElementById("famousBtn");
  const bestContent = document.getElementById("bestContent");
  const famousContent = document.getElementById("famousContent");
  const swBest = document.querySelector(".sw-best");
  const swFamous = document.querySelector(".sw-famous");
  const bestTitle = document.querySelector(".best-food");
  const famousTitle = document.querySelector(".famous-food");
  // 초기에는 첫 번째 컨텐츠가 보이도록 설정
  bestContent.style.display = "block";
  famousContent.style.display = "none";
  // 베스트 후기 버튼 클릭 시
  bestBtn.addEventListener("click", function () {
    bestContent.style.display = "block";
    famousContent.style.display = "none";
    bestTitle.style.display = "block";
    famousTitle.style.display = "none";
    bestBtn.style.backgroundColor = "#fe6b38";
    bestBtn.style.color = "#fff";
    bestBtn.style.border = "none";
    famousBtn.style.border = "1px solid #bababa";
    famousBtn.style.backgroundColor = "#fff";
    famousBtn.style.color = "#bababa";
    swBest.swiper.slideTo(0);
  });
  // 유명인 방문 버튼 클릭 시
  // famousBtn 클릭 시
  famousBtn.addEventListener("click", function () {
    bestContent.style.display = "none";
    famousContent.style.display = "block";
    bestTitle.style.display = "none";
    famousTitle.style.display = "block";
    famousBtn.style.backgroundColor = "#fe6b38";
    famousBtn.style.color = "#fff";
    famousBtn.style.border = "none";
    bestBtn.style.border = "1px solid #bababa";
    bestBtn.style.backgroundColor = "#fff";
    bestBtn.style.color = "#bababa";
    swFamous.swiper.slideTo(0);
  });
  // 시장 클릭 이벤트
  const oldBtn = document.getElementById("oldBtn");
  const uniqueBtn = document.getElementById("uniqueBtn");
  const nightBtn = document.getElementById("nightBtn");
  const oldContent = document.getElementById("oldContent");
  const uniqueContent = document.getElementById("uniqueContent");
  const nightContent = document.getElementById("nightContent");
  const swOld = document.querySelector(".sw-old");
  const swUnique = document.querySelector(".sw-unique");
  const swNight = document.querySelector(".sw-night");
  const oldTitle = document.querySelector(".old-market");
  const uniqueTitle = document.querySelector(".unique-market");
  const nightTitle = document.querySelector(".night-market");
  // 초기에는 첫 번째 컨텐츠가 보이도록 설정
  oldContent.style.display = "block";
  uniqueContent.style.display = "none";
  nightContent.style.display = "none";
  // 옛날 감성 버튼 클릭 시
  oldBtn.addEventListener("click", function () {
    oldContent.style.display = "block";
    uniqueContent.style.display = "none";
    nightContent.style.display = "none";
    oldTitle.style.display = "block";
    uniqueTitle.style.display = "none";
    nightTitle.style.display = "none";
    oldBtn.style.backgroundColor = "#fe6b38";
    oldBtn.style.color = "#fff";
    oldBtn.style.border = "none";
    uniqueBtn.style.border = "1px solid #bababa";
    uniqueBtn.style.backgroundColor = "#fff";
    uniqueBtn.style.color = "#bababa";
    nightBtn.style.border = "1px solid #bababa";
    nightBtn.style.backgroundColor = "#fff";
    nightBtn.style.color = "#bababa";
    swBest.swiper.slideTo(0);
  });
  // 특색있는 시장 버튼 클릭 시
  uniqueBtn.addEventListener("click", function () {
    oldContent.style.display = "none";
    uniqueContent.style.display = "block";
    nightContent.style.display = "none";
    oldTitle.style.display = "none";
    uniqueTitle.style.display = "block";
    nightTitle.style.display = "none";
    uniqueBtn.style.backgroundColor = "#fe6b38";
    uniqueBtn.style.color = "#fff";
    uniqueBtn.style.border = "none";
    oldBtn.style.border = "1px solid #bababa";
    oldBtn.style.backgroundColor = "#fff";
    oldBtn.style.color = "#bababa";
    nightBtn.style.border = "1px solid #bababa";
    nightBtn.style.backgroundColor = "#fff";
    nightBtn.style.color = "#bababa";
    swFamous.swiper.slideTo(0);
  });
  // 야시장 버튼 클릭 시
  nightBtn.addEventListener("click", function () {
    oldContent.style.display = "none";
    uniqueContent.style.display = "none";
    nightContent.style.display = "block";
    oldTitle.style.display = "none";
    uniqueTitle.style.display = "none";
    nightTitle.style.display = "block";
    nightBtn.style.backgroundColor = "#fe6b38";
    nightBtn.style.color = "#fff";
    nightBtn.style.border = "none";
    uniqueBtn.style.border = "1px solid #bababa";
    uniqueBtn.style.backgroundColor = "#fff";
    uniqueBtn.style.color = "#bababa";
    oldBtn.style.border = "1px solid #bababa";
    oldBtn.style.backgroundColor = "#fff";
    oldBtn.style.color = "#bababa";
    swFamous.swiper.slideTo(0);
  });

  // ===================== 스와이프
  // 베스트 맛집 스와이프
  var swbest = new Swiper(".sw-best", {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // 유명인 맛집 스와이프
  var swfamous = new Swiper(".sw-famous", {
    slidesPerView: 4,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // 옛날 감성 스와이프
  var swfamous = new Swiper(".sw-old", {
    slidesPerView: 4,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // 특색 있는 스와이프
  var swfamous = new Swiper(".sw-unique", {
    slidesPerView: 4,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // 야시장 스와이프
  var swfamous = new Swiper(".sw-night", {
    slidesPerView: 4,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // =====================================================
});
