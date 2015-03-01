var $vW = $(window).width();
var $vH = $(window).height();

$(function () {

  "use strict";

  if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    $(".header").css("position", "absolute");
    $(".nav").css("transition", "initial");
  }

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

      $(".nav__trigger__mobile-wrap").removeClass("is-clicked");

      // iOS doesn't do well with fixed positioned things
      if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        $(".nav__logo__scroll").css({
          "position": "absolute",
          "top": "0"
        });

        $(".pagination").css({
          "position": "absolute",
          "top": "0"
        });

        /*
        $(".pagination").css({
          "background-color": "red",
          "position": "absolute",
          "bottom": "0"
        });
        */
      }

    }, 10);

    /*
    if ($vW <= 800) {
      $(".nav").removeClass("is-open");
    }
    */
  });

  $(".nav__trigger__mobile-wrap").bind("click touchstart", function (e) {
    $(".nav").toggleClass("is-open");
    $(".nav__trigger__mobile-wrap").toggleClass("is-clicked");
    e.preventDefault();
  });

});