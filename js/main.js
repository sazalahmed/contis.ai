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



    //=======SMALL DEVICE MENU ICON======
    $(".navbar-toggler").on("click", function () {
        $(".navbar-toggler").toggleClass("show");
    });


    //======SCROLL BUTTON=======
    $('.tf__scroll_btn').on('click', function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 200);
    });

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 400) {
            $('.tf__scroll_btn').fadeIn();
        } else {
            $('.tf__scroll_btn').fadeOut();
        }
    });



});

