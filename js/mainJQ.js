$(document).ready(function () {
   $(".main-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 2000,
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
      autoplay: true,
      smartSpeed: 2000,
      autoplayTimeout: 5500,
      items: 1,
      nav: true,
      dots: true,
      dotsEach: true,
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