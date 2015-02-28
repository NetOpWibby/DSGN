var $vW = $(window).width();

$(function () {

  // TODO:
  // Make this work with HTML tags

  // Style first four words in a paragraph, to be fancy
  // Regex is needed for apostrophes blocking the styling

  "use strict";

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

    return text.replace(/^(\w+\s\w+\s\w+\s\w+)|^(\w+\W\w+\s\w+\s\w+\s\w+)|^(\w+\s\w+\W\w+\s\w+\s\w+)|^(\w+\s\w+\s\w+\W\w+\s\w+)|^(\w+\s\w+\s\w+\s\w+\W\w+)|^(\w+\s\w+\s\w+)|^(\w+)/i, function (match) {
      return "<span class='p-intro'>" + match + "</span>";
    });

  });



  var url = location.pathname;

  if (url.indexOf("/") > -1) {
    $("body").addClass("hp");
  }

  if (url.indexOf("me") > -1) {
    $("body").removeAttr("class");
  }

  if (url.indexOf("projects") > -1) {
    $("body").removeAttr("class");
  }

  if (url.indexOf("resume") > -1) {
    $("body").removeAttr("class");
  }

  if (url.indexOf("thoughts") > -1) {
    $("body").removeAttr("class");
  }



  // Change header background on DSGN* load
  var
  baseURL = "http://localhost:4000", // development
  // baseURL = "http://dsgn.io",
  images = ["portrait-01.jpg", "portrait-01b.jpg", "portrait-01c.jpg", "portrait-02.jpg", "portrait-03.jpg"];

  $(".header").css({"background-image": "url(" + baseURL + "/images/" + images[Math.floor(Math.random() * images.length)] + ")"});



  // Scroll to top functionality
  $(".top").click(function (e) {

    $("html, body").animate({ scrollTop: 0 }, "slow");
    e.preventDefault();

  });



  // Prevent hover on iOS devices
  // via https://medium.com/@ennsu/disabling-hover-interactions-on-ios-acb034f32325
  if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += "no-touch";
  }

});