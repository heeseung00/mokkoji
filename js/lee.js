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
