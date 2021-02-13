$(document).ready(function(){
  $('.slick__tabs-one').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    nextArrow: $('#nav-tabContent .slick-next'),
    prevArrow: $('#nav-tabContent .slick-previous'),
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true
        },
      },
    ],
  });
  $("#nav-profile-tab").click(function(){
  $('.slick__tabs-two').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    nextArrow: $('#nav-profile .slick-next'),
    prevArrow: $('#nav-profile .slick-previous'),
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true
        },
      },
    ],
  });
  });
  $("#nav-contact-tab").click(function(){
  $('.slick__tabs-three').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    nextArrow: $('#nav-contact .slick-next'),
    prevArrow: $('#nav-contact .slick-previous'),
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true
        },
      },
    ],
  });
  });
});



