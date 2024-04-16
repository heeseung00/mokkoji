window.addEventListener("load", function () {
  var review = new Swiper(".reviewSwiper", {
    slidesPerView: "5",
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    enderCustom: function (swiper, current, total) {
      return current + " of " + total;
    },
    scrollbar: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        var realIndex = this.realIndex;
        var slides = this.slides;
        if ((realIndex + 1) % 4 === 0) {
          slides[realIndex].style.transform = "scale(1.5)";
        } else {
          slides[realIndex].style.transform = "scale(1)";
        }
      },
    },
  });

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
  showMarketCon();

  const titleBtns = document.querySelectorAll(".title-btn");

  // // 장날2
  // const marketData = [
  //   [
  //     {
  //       imageSrc: "images/hee/market1.jpg",
  //       title: "구룡포 시장",
  //       description: "장날: 3일, 8일",
  //       product: "특산물: 건어물 ,수산물, 복어",
  //     },
  //     {
  //       imageSrc: "images/hee/market2.jpg",
  //       title: "정선 아리랑 시장",
  //       description: "장날: 4일, 9일",
  //       product: "특산물: 곤드레나물, 황기",
  //     },
  //     {
  //       imageSrc: "images/hee/market3.jpg",
  //       title: "보성 벌교 시장",
  //       description: "장날: 4일, 9일",
  //       product: "특산물: 꼬막, 낙지, 생선",
  //     },
  //     {
  //       imageSrc: "images/hee/market4.jpg",
  //       title: "구룡포 시장(수정 예정)",
  //       description: "장날: 5일,8일",
  //       product: "특산물: 오징어, 대게, 도루묵",
  //     },
  //   ],
  //   [
  //     {
  //       imageSrc: "images/hee/market2.jpg",
  //       title: "(수정 예정)",
  //       description: "장날: 3일, 8일",
  //       product: "특산물: 건어물 ,수산물, 복어",
  //     },
  //     {
  //       imageSrc: "images/hee/market1.jpg",
  //       title: "(수정 예정)",
  //       description: "장날: 4일, 9일",
  //       product: "특산물: 곤드레나물, 황기",
  //     },
  //     {
  //       imageSrc: "images/hee/market3.jpg",
  //       title: "(수정 예정)",
  //       description: "장날: 4일, 9일",
  //       product: "특산물: 꼬막, 낙지, 생선",
  //     },
  //     {
  //       imageSrc: "images/hee/market4.jpg",
  //       title: "(수정 예정)",
  //       description: "장날: 5일,8일",
  //       product: "특산물: 오징어, 대게, 도루묵",
  //     },
  //   ],
  // ];

  // const cardContainer = document.querySelector(".market-container");
  // // 카드 요소 동적 생성 및 삽입
  // marketData.forEach((menu, index) => {
  //   // console.log(menu);
  //   // console.log(index);
  //   // ul 만들기
  //   const cardList = document.createElement("ul");
  //   cardList.classList.add("card"); // 클래스 추가
  //   // 처음에 첫번째 메뉴만 활성화되게 설정
  //   if (index === 0) {
  //     cardList.classList.add("active");
  //   }

  //   // li 만들어서 안에 내용 넣기
  //   menu.forEach((marketContent) => {
  //     const cardItem = document.createElement("li");
  //     cardItem.innerHTML = `
  //     <img src="${marketContent.imageSrc}" alt="${marketContent.description}" />
  //     <h3>${marketContent.title}</h3>
  //     <p>${marketContent.description}</p>
  //     <p>${marketContent.product}</p>
  //   `;
  //     cardList.appendChild(cardItem);
  //   });
  //   cardContainer.appendChild(cardList);
  // });

  // // 메뉴 아이템 클릭 이벤트 추가
  // const menuItems = document.querySelectorAll(".title-btn");
  // menuItems.forEach((menuItem, index) => {
  //   menuItem.addEventListener("click", function () {
  //     showCard(index);
  //   });
  // });

  // // 카드 보여주는 함수
  // function showCard(index) {
  //   const cards = document.querySelectorAll(".card");
  //   cards.forEach((card, i) => {
  //     if (i === index) {
  //       card.classList.add("active");
  //     } else {
  //       card.classList.remove("active");
  //     }
  //   });
  //   const menuItems = document.querySelectorAll(".title-btn");
  //   menuItems.forEach((menuItem, i) => {
  //     if (i === index) {
  //       menuItem.classList.add("active");
  //     } else {
  //       menuItem.classList.remove("active");
  //     }
  //   });
  // }
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
    $(this).addClass("on").siblings().removeClass("on");
    // $(".market-btn-color").removeClass("on");
    // $(this).addClass("on");
  });
});
