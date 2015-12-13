/* jshint undef: true, unused: true */
/* global window, document */



window.addEventListener("load", initAds);

function initAds() {
  var
    myArray = [
      weom
    ],
    rand = myArray[Math.floor(Math.random() * myArray.length)]
  ;

  rand();
}



function weom() {
  var
    imageArray = [
      "/images/ads/weom/01.jpg",
      "/images/ads/weom/02.jpg",
      "/images/ads/weom/03.jpg",
      "/images/ads/weom/04.jpg",
      "/images/ads/weom/05.jpg",
      "/images/ads/weom/06.jpg"
    ],
    randomImage = imageArray[Math.floor(Math.random() * imageArray.length)],
    ad = ""
  ;

  ad += "<a href='https://weöm.com' target='_blank' class='ad__img-wrap'>";
  if (imageArray.length) {
    ad += "<img src='" + window.location.origin + randomImage + "' class='ad__img'/>";
  } else {
    ad += "<img src='" + window.location.origin + "/images/ads/00.jpg" + "' class='ad__img'/>";
  }
  ad += "</a>";

  if (imageArray.length) {
    ad += "<div class='ad__line'>";
    ad += "<strong>WEÖM</strong> | Dope space apparel<br/><br/>Use code <strong>WINTER15</strong> for <strong>20% off</strong> your entire order!";
    ad += "</div>";
  }

  document.getElementById("ad__content").innerHTML = ad;
}