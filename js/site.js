$(document).ready(function () {
  // close icon in navbar
  $(".navbar-toggler").click(function () {
    $(this).toggleClass("close");
  });


  $('.search-icon').click(function () {
    $('.search-layout').css({
      'display': 'flex',
      'transition': 'width 0.8s ease-in-out'
    });
    $('.input-group').animate({ 'width': '60%' }, 500);
  });

  $('.exit-icon').click(function () {
    $('.search-layout').css({
      'display': 'none',
    });
  });

  // end navbar


  // start header carousel


  $('.owl-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ]
  })

});