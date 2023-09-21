$(function () {

    "use strict";

    //=========MENU FIX JS=========   
    if ($('.tf__main_menu').offset() != undefined) {
        var navoff = $('.tf__main_menu').offset().top;
        $(window).scroll(function () {
            var scrolling = $(this).scrollTop();

            if (scrolling > navoff) {
                $('.tf__main_menu').addClass('menu_fix');
            } else {
                $('.tf__main_menu').removeClass('menu_fix');
            }
        });
    }



    //*=====TESTIMONIAL SLIDER===== 
    $('.testi_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="fas fa-long-arrow-right nextArrow"></i>',
        prevArrow: '<i class="fas fa-long-arrow-left prevArrow"></i>',
    });



});

