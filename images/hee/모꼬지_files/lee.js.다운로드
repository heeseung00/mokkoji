window.addEventListener("load", function () {
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
  // =====================================================
});
