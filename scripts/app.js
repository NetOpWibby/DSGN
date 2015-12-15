/* jshint undef: true, unused: true */
/* global $, location, window, hljs */



$(function () {

  console.log(
    '%c\n' +
    '██████╗ ███████╗ ██████╗ ███╗   ██╗\n' +
    '██╔══██╗██╔════╝██╔════╝ ████╗  ██║\n' +
    '██║  ██║███████╗██║  ███╗██╔██╗ ██║\n' +
    '██║  ██║╚════██║██║   ██║██║╚██╗██║\n' +
    '██████╔╝███████║╚██████╔╝██║ ╚████║\n' +
    '╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝\n' +
    "\n" +
    "           A W E S O M E           \n\n",

    'color: #07d0eb'
  );



  // Sitemap toggle
  $(".sitemap-trigger").click(function (e) {
    e.preventDefault();

    $(this).toggleClass("active");
    $(".sitemap").toggleClass("active");
    $("body").toggleClass("sitemap-active");
  });



  // Make sure copyright is always up to date
  $(".copyright").html(new Date().getFullYear());

  // Jekyll fix
  $("p:empty").remove();



  // Automatically open external links in new tabs
  $("a[href^=http]").each(function () {
    if (this.href.indexOf(location.hostname) == -1) {
      $(this).attr("target", "_blank");
    }
  });



  // Navigation highlighting and page-specific things
  if (window.location.pathname == "/") {
    $(".sitemap__link").removeClass("active");
    $(".s-01").addClass("active");
  }

  if (window.location.pathname == "/me/") {
    $(".navigation__item, .sitemap__link").removeClass("active");
    $("#nav-01, .s-02").addClass("active");
  }

  if (window.location.pathname === "/projects/" || window.location.pathname.indexOf("projects") > -1) {
    $(".navigation__item, .sitemap__link").removeClass("active");
    $("#nav-03, .s-03").addClass("active");

    // Set up images for zoom.js
    $("img:not(.image)").attr("data-action", "zoom");
  }

  if (window.location.pathname === "/thoughts/" || window.location.pathname.indexOf("thoughts") > -1) {
    $(".navigation__item, .sitemap__link").removeClass("active");
    $("#nav-02, .s-04").addClass("active");

    // Set up images for zoom.js
    $("img:not(.ad img)").attr("data-action", "zoom");
  }

  if (window.location.pathname == "/resume/") {
    $(".sitemap__link").removeClass("active");
    $(".s-05").addClass("active");
  }

  if (window.location.pathname == "/imprint/") {
    $(".sitemap__link").removeClass("active");
    $(".s-06").addClass("active");
  }



  // Style first three words
  if (window.location.pathname == "/thoughts/") {
    $("p").html(function (i, v) {
      return $.trim(v).replace(/^([\S]+)\s([\S]+)\s([\S]+)/, "<span class='intro'>$1 $2 $3</span>");
    });
  } else {
    $("p:first").html(function (i, v) {
      return $.trim(v).replace(/^([\S]+)\s([\S]+)\s([\S]+)/, "<span class='intro'>$1 $2 $3</span>");
    });
  }



  // Code highlighting
  $("pre code").each(function (i, block) {
    hljs.highlightBlock(block);
  });

  function addSourceLineNumbers() {
    var
      l = 1,
      result = this.innerHTML.replace(/\n/g, function () {
        l++;
        // Using data-attributes to place line numbers so they don't get copied
        // I hate when that happens, ugh!
        return "\n" + "<span class='line-number' data-lineNumber='" + l + "'></span>";
      })
    ;

    if (l > 3) {
      $(this).html("<span class='line-number' data-lineNumber='1'></span>" + result);
      $(".line-number:last-child").hide();
    }
  }

  $("pre code").each(addSourceLineNumbers);



  // Scroll to top
  if ($.browser.mobile) {
    $("#goUp").addClass("mobile");
  }

  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 500) {
      $("#goUp").addClass("active");

      if ($(".titlebar").length > 0 && $(window).width() > 600) {
        $(".titlebar").addClass("active");
      }
    } else {
      $("#goUp").removeClass("active");

      if ($(".titlebar").length > 0) {
        $(".titlebar").removeClass("active");
      }
    }
  });

  $("#goUp, .titlebar").click(function (e) {
    e.preventDefault();

    $("html, body").animate({ // Firefox requires "html"
      scrollTop: $("body").offset().top
    }, 500);

    return false;
  });

});



//------------------------------
// Mobile Browser Detector
//------------------------------

(function(a){($.browser=$.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));})(navigator.userAgent||navigator.vendor||window.opera);