var main = {
  init: function () {
    this.closed()
    this.smoothscroll()
    this.typedani()
    this.scrollanimation()
    this.swiperbar()
  },

  closed: function () {
    $("#click").click(function () {
      $("#nav").toggleClass("closed")
    })
  },

  smoothscroll: function () {
    $("#nav a[href^='#']").on("click", function (e) {
      // prevent default anchor click behavior
      e.preventDefault()

      // store hash
      var hash = this.hash

      // animate
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          // when done, add hash to url
          // (default click behaviour)
          window.location.hash = hash
        }
      )
    })
  },

  typedani: function () {
    new Typed(".element", {
      strings: [
        "Hello",
        "नमस्कार",
        "こんにちは",
        "Привет",
        "안녕하십니까",
        "你好",
        "Halló",
        "Bonjour",
        "Hola",
      ],
      typeSpeed: 300,
      loop: true,
      showCursor: false,
    })
  },

  scrollanimation: function () {
    AOS.init()
  },

  swiperbar: function () {
    new Swiper(".swiper", {
      direction: "horizontal",
      slidesPerView: 4,
      loop: false,
      centeredSlides: false,
      edgeSwipeDetection: true,

      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
      },

      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        snapOnRelease: true,
      },

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        720: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1044: {
          slidesPerView: 3.2,
          spaceBetween: 50,
        },
        1920: {
          slidesPerView: 3.2,
          spaceBetween: 20,
        },
      },
    })
  },
}

main.init()
