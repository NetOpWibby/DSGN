// DSGN.js ∞
// Paul Anthony Webb (https://github.com/NetOperatorWibby/DSGN)
// MIT licensed

/* jshint undef: true, unused: true */
/* global $, document, window, setTimeout, navigator */

$(function () {

  "use strict";

  // Style first four words in a paragraph, to be fancy
  // Regex is needed for apostrophes blocking the styling

  // TODO:
  // Make this work with HTML tags


  $("p:first-of-type:not(blockquote p)").html(function (i, text) {
    //// Four word sets
    // The quick brown fox
    // Th'e quick brown fox
    // The qu'ick brown fox
    // The quick bro'wn fox
    // The quick brown f'ox

    //// Three word sets
    // The quick brown

    //// Single word
    // The

    /*
    var dsgnEX = [
      "/^",
      "(/\w+/\s\/w+/\s/\w+/\s/\w+)|^",
      "(/\w+/\W/\w+/\s/\w+/\s/\w+/\s/\w+)|^",
      "(/\w+/\s/\w+/\W/\w+/\s/\w+/\s/\w+)|^",
      "(/\w+/\s/\w+/\s/\w+/\W/\w+/\s/\w+)|^",
      "(/\w+/\s/\w+/\s/\w+/\s/\w+/\W/\w+)|^",
      "(/\w+/\s/\w+/\s/\w+)|^",
      "(/\w+)",
      "/i"
    ].join("");

    console.log(dsgnEX);
    */



    // /^(\w+\s\w+\s\w+\s\w+)|^(\w+\W\w+\s\w+\s\w+\s\w+)|^(\w+\s\w+\W\w+\s\w+\s\w+)|^(\w+\s\w+\s\w+\W\w+\s\w+)|^(\w+\s\w+\s\w+\s\w+\W\w+)|^(\w+\s\w+\s\w+)|^(\w+)/i

    return text.replace(
      /^(\w+\s\w+\s\w+\s\w+)|^(\w+\W\w+\s\w+\s\w+\s\w+)|^(\w+\s\w+\W\w+\s\w+\s\w+)|^(\w+\s\w+\s\w+\W\w+\s\w+)|^(\w+\s\w+\s\w+\s\w+\W\w+)|^(\w+\s\w+\s\w+)|^(\w+)/i,
      function (match) {
        return "<span class='p-intro'>" + match + "</span>";
      }
    );

    /*
    return text.replace(dsgnEX, function (match) {
      return "<span class='p-intro'>" + match + "</span>";
    });
    */
  });



  // Change header background on DSGN* load
  var
    host = window.location.protocol + "//" + window.location.host + "/",
    images = ["portrait-01.jpg", "portrait-01b.jpg", "portrait-01c.jpg", "portrait-02.jpg", "portrait-03.jpg"];

  $(".header").css({"background-image": "url(" + host + "images/" + images[Math.floor(Math.random() * images.length)] + ")"});



  // Smooth scroll to top functionality
  $(".top").click(function (e) {

    $("html, body").animate({ scrollTop: 0 }, "slow");
    e.preventDefault();

  });



  // More scrolling fun!
  $(window).on("scroll", function () {
    var
    value = $(this).stop().scrollTop(),
    scrollPerc = Math.ceil($(this).scrollTop());

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
      }
    }, 10);

    // Could be better...
    $(".ugh").css("top", "-" + scrollPerc + "px");
  });



  // Prevent `ugh` from changing position on reload when scrolled
  var ughTop = document.body.scrollTop;

  $(window).on("load", function() {
    $(".ugh").css("top", ughTop);
  });



  // Fun-fact: `touchstart` removes unsightly mobile lag
  $(".nav__trigger__mobile-wrap").bind("click touchstart", function (e) {
    $(".nav").toggleClass("is-open");
    $(".nav__trigger__mobile-wrap").toggleClass("is-clicked");

    e.preventDefault();
  });



  // iOS doesn't do well with fixed positioned things
  if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    $(".header").css("position", "absolute");
    $(".nav").css("transition", "initial");
    $(".ugh").css("display", "none");
  }



  // Enable Fluidbox
  $("figure a").fluidbox();



  // Swipe navigation
  $("#main").on("swipe", function (event) {
    if (event.direction === "left") {
      // previous page/post
      if ($(".pagination__item--previous").length > 0) {
        window.location = $(".pagination__item--previous").attr("href");
      }
    }

    if (event.direction === "right") {
      // next page/post
      if ($(".pagination__item--next").length > 0) {
        window.location = $(".pagination__item--next").attr("href");
      }
    }
  });

  // console.log("Prev: " + $(".pagination__item--previous").attr("href"));
  // console.log("Next: " + $(".pagination__item--next").attr("href"));



  /*
  // Prevent hover on iOS devices
  // via https://medium.com/@ennsu/disabling-hover-interactions-on-ios-acb034f32325
  if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += "no-touch";
  }
  */

});