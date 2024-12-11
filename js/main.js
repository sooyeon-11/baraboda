/* depth2 */
$(".gnb > li").hover(function () {
  $(this).find(".depth2").stop().fadeToggle();
});

$(".mgnb > li ").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").slideUp();
});

/* mgnb, mdepth2 */
$(".ham").click(function () {
  $(".dim").fadeIn();
  $(".mgnb_wrap").animate({
    "right": "0"
  });
});

$(".mgnb_close").click(function () {
  $(".dim").fadeOut();
  $(".mgnb_wrap").animate({
    "right": "-100%"
  });
});

/* search */
$(".search").hide();
$(".btn_search").click(function () {
  $(".search").fadeIn();
  $("body").css({ "overflow": "hidden" })
});

$(".search_close").click(function () {
  $(".search").fadeOut();
  $("body").css({ "overflow": "auto" })
});

/* visual */
const visual_list = new Swiper('.visual_list', {
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  effect: "fade",/* 페이드 효과 */
  fadeEffect: {
    crossFade: true
  },
  speed: 1000,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

/*  brand */
const brand_txt_list = new Swiper('.brand_txt_list', {
  effect: "fade",/* 페이드 효과 */
  fadeEffect: {
    crossFade: true
  },

});

const brand_img_list = new Swiper('.brand_img_list', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});

brand_txt_list.controller.control = brand_img_list;
brand_img_list.controller.control = brand_txt_list;

/* product */
const product_list = new Swiper('.product_list', {
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  speed: 1000,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

/* gallery */
$(".gallery ul li:nth-child(1)").addClass("active")
$(".gallery ul li").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
});