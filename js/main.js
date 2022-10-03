$(document).ready(function () {
  $(".input-file input[type=file]").on("change", function () {
    let file = this.files[0];
    $(this).next().html(file.name);
  });

  $("#toggle").click(function () {
    var elem = $("#toggle").text();
    if (elem == "Читать далее") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Свернуть");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Читать далее");
      $("#text").slideUp();
    }
  });

  $("#toggle").click(function () {
    $(".before").css("display", "none");
  });

  $(".responsive").slick({
    infinite: true,
    speed: 300,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".next-arrow").on("click", function () {
    $(".responsives").slick("slickNext");
  });

  $(".prev-arrow").on("click", function () {
    $(".responsives").slick("slickPrev");
  });

  $(".responsives").slick({
    infinite: true,
    speed: 300,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "200px",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  });

  $(".next-arrows").on("click", function () {
    $(".rev").slick("slickNext");
  });

  $(".prev-arrows").on("click", function () {
    $(".rev").slick("slickPrev");
  });

  $(".rev").slick({
    infinite: true,
    speed: 300,
    dots: true,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".next-arrows").on("click", function () {
    $(".revs").slick("slickNext");
  });

  $(".prev-arrows").on("click", function () {
    $(".revs").slick("slickPrev");
  });

  $(".revs").slick({
    infinite: true,
    speed: 300,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1,
        },
      },
    ],
  });

  const burger = document.querySelector(".burger");
  const navbar = document.querySelector(".mt-mobile");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("nav-open");
    body.classList.toggle("body-open");
    burger.classList.toggle("burger-open");
  });

  $("#modul-1").on("click", function (e) {
    $(".modul-1").css("display", "block");
    $("body").css("overflow", "hidden");
  });

  $("#modul-2").on("click", function (e) {
    $(".modul-1").css("display", "block");
    $("body").css("overflow", "hidden");
  });

  $("a#modul-3").on("click", function (e) {
    $(".modul-2").css("display", "block");
    $("body").css("overflow", "hidden");
  });

  $(".rev-bot-is").on("click", function (e) {
    $(".modul-3").css("display", "block");
    $("body").css("overflow", "hidden");
  });

  $(".rev-but").on("click", function (e) {
    $(".modul-4").css("display", "block");
    $("body").css("overflow", "hidden");
  });

  $("a#modul-6").on("click", function (e) {
    $(".modul-5").css("display", "block");
    $("body").css("overflow", "hidden");
  });

  $("a#modul-7").on("click", function (e) {
    $(".modul-6").css("display", "block");
    $("body").css("overflow", "hidden");
  });

  $("#modul-8").on("click", function (e) {
    $(".modul-1").css("display", "block");
    $("body").css("overflow", "hidden");
  });

  $("#modul-9").on("click", function (e) {
    $(".modul-2").css("display", "block");
    $("body").css("overflow", "hidden");
  });

  $(".close").on("click", function (e) {
    $(".modul-1").css("display", "none");
    $(".modul-2").css("display", "none");
    $(".modul-3").css("display", "none");
    $(".modul-4").css("display", "none");
    $(".modul-5").css("display", "none");
    $(".modul-6").css("display", "none");
    $("body").css("overflow", "auto");
  });

  $(".closes").on("click", function (e) {
    $(".modul-1").css("display", "none");
    $(".modul-2").css("display", "none");
    $(".modul-3").css("display", "none");
    $(".modul-4").css("display", "none");
    $(".modul-5").css("display", "none");
    $(".modul-6").css("display", "none");
    $("body").css("overflow", "auto");
  });

  $(".accordion-wrap").on("click", function () {
    $(this).children().eq(1).slideToggle(300);
    $(this).children().eq(0).toggleClass("accordion-no-bar");
    $(this).siblings().find(".accordion-header").removeClass("accordion-gold");
    $(this).siblings().find(".accordion-header i").removeClass("rotate-fa");
    $(this).find(".accordion-header").toggleClass("accordion-gold");
    $(this).find(".fa").toggleClass("rotate-fa");

    $(".accordion-wrap .accordion-text")
      .not($(this).children().eq(1))
      .slideUp(300);
  });

  $("a.but-appeal-mob").on("click", function (e) {
    $("ul.appeal-is").css("max-height", "100%");
    $("a.but-appeal-mob").css("display", "none");
  });
  addIamgesData();
});

function addIamgesData() {
  document.querySelector('input[type="file"]').addEventListener('change',function(e) {
      $('.file-add-list').append(renderFileItem(e.target.files[0].name))
  })

  $('.file-add').click(function(e) {
    if($(e.target).hasClass('file-add-close')) {
      $(e.target.parentNode).remove()
    }
  })
  

  function renderFileItem(name) {
    return (
      `<div class="file-add-list-item">
        ${name}
        <img class="file-add-close"  src="images/close.svg"/>
      </div>`
    )
  }
}
