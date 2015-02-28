var $vW = $(window).width();

$(function () {

  "use strict";

  $(window).scroll(function () {
    var value = $(this).stop().scrollTop();

    setTimeout(function () {
      if (value > 1) {
        $(".nav-wrapper").addClass("is-scrolled");

        if ($(".nav").hasClass("is-open")) {
          $(".nav").removeClass("is-open");
        }
      }

      if (value < 1) {
        $(".nav-wrapper").removeClass("is-scrolled");
      }
    }, 10);

    /*
    if ($vW <= 800) {
      $(".nav").removeClass("is-open");
    }
    */
  });

  $(".nav__trigger__mobile-wrap").on("click", function (e) {
    $(".nav").toggleClass("is-open");
    e.preventDefault();
  });

});