$(document).ready(function () {
   $(".main-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 3000,
      autoplayTimeout: 5500,
      items: 1,
      nav: true,
      dots: true,
      dotsEach: true,
   });
}); 

$(document).ready(function () {
   $(".master-carousel").owlCarousel({
      loop: true,
      smartSpeed: 500,
      items: 3,
      nav: true,
      margin: 5,
   });
}); 

// $('.modal-enter').click(function (e) {
//    e.preventDefault();
//    $('.entrance').addClass('opened');
//  });
//  $('.closemodal').click(function (e) {
//    e.preventDefault();
//    $('.entrance').removeClass('opened');
//  });
 
//  $('.modal-reg').click(function (e) {
//    e.preventDefault();
//    $('.registration').addClass('opened');
//  });
//  $('.closemodal').click(function (e) {
//    e.preventDefault();
//    $('.registration').removeClass('opened');
//  });