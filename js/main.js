// sidebar
$(".closebtn").on("click", function () {
  $("#menue")
    .animate({ width: "0px" }, 100)
    .animate({ paddingInline: "0px" }, 100);
  $(".openNav").animate({ left: "30px" }, 100);
  $("#head-content").animate({ marginLeft: "0px" }, 100);
});
$(".openNav").on("click", function () {
  console.log("done");
  $("#menue").animate({ width: "250px" }, 100);
  $("#head-content").animate({ marginLeft: "250px" }, 100);
});

/*menu*/
$(`#menue a [href^="#"]`).on("click", function () {
  let sections = $(this).attr("href");

  let offset = $(sections).offset().top;
  $("html , body").animate({ scrollTop: offset }, 2000);
});

// according
$("#according .slide-button").on("click", function () {
  $(this).children("i").toggleClass("rotate");
  $(this).next().slideToggle(500);

  $(".inner").not($(this).next()).slideUp(500);
  $("#according .slide-button i")
    .not($(this).children("i"))
    .removeClass("rotate");
});

// countDown
(function countDown() {
  let countDate = new Date("August 31, 2024 ").getTime();
  let dayDate = new Date().getTime();
  let calc = countDate - dayDate;
  let days = Math.floor(calc / (1000 * 60 * 60 * 24));
  let hours = Math.floor(calc / (1000 * 60 * 60)) % 24;
  let minutes = Math.floor(calc / (1000 * 60)) % 60;
  let seconds = Math.floor(calc / 1000) % 60;

  $(".day").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${minutes} m`);
  $(".seconds").html(`${seconds} s`);
  setInterval(function () {
    countDown();
  }, 1000);

  if (calc < 0) {
    clearInterval(function () {
      countDown();
    }, 1000);

    $("#downCount").html(`<div class="container">
          <div class="row gy-3">
    <div class="col-md-12 expire">
    <div class="inner d-grid"><p class="m-auto">Countdown expired!</p>
    </div>
    </div>
    </div>
    </div>`);
  }
})();

// character length

$("textarea").on("keyup", function () {
  let maxLength = 100;
  let charLeft = maxLength - $(this).val().length;
  if (charLeft <= 0) {
    $(".num").html("your available character finished");
  } else {
    $(".num").html(charLeft);
  }
});

// loader

$(function () {
  $(".lds-roller").fadeOut(1000, function () {
    $(".loader").slideUp(1000, function () {
      $("body").css("overflow", "auto");
    });
  });
});
