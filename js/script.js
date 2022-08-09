$(document).ready(function () {
    $('html').css('overflow', 'hidden');

    let modalWrap = $('.modal-wrap');
    let modalClose = $('.modal-close');
    modalClose.click(function () {
        modalWrap.stop().fadeOut(100);
        $('html').css('overflow', 'auto');
    });

    let modalMain = $('.modal-main');
    modalMain.click(function (event) {
        event.stopPropagation();
    });
    modalWrap.click(function () {
        modalWrap.stop().fadeOut(100);
        $('html').css('overflow', 'auto');
    });

});

window.onload = function () {
    // swiper
    let swVisual = new Swiper('.sw-visual', {
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 10000,
        },
        navigation: {
            prevEl: '.sw-visual-prev',
            nextEl: '.sw-visual-next'
        },

        pagination: {
            el: '.sw-visual-pg',
            clickable: true
        }
    });

    // 자동 실행 멈춤/재생
    let swPause = $('.sw-visual-pause');
    swPause.click(function () {

        let temp = $(this).hasClass('sw-visual-play');

        if (temp == false) {

            $(this).addClass('sw-visual-play');
            // 슬라이드 멈추기
            swVisual.autoplay.stop();

        } else {

            $(this).removeClass('sw-visual-play');
            // 슬라이드 재생
            swVisual.autoplay.start();
        }
    });

    // item sw
    let slideMenu = $('.slide-menu a');
    $.each(slideMenu, function (index, item) {
        $(this).click(function (event) {
            // href 막기
            event.preventDefault();
            swSlide.slideTo(index + 1);
        });
    });


    slideMenu.eq(0).addClass('slide-menu-active');

    let swSlide = new Swiper('.sw-slide', {
        loop: true
    });

    swSlide.on('slideChange', function () {
        slideMenu.removeClass('slide-menu-active');
        slideMenu.eq(swSlide.realIndex).addClass('slide-menu-active');
    });


    // popular sw
    let popularMenu = $('.popular-menu a');
    $.each(popularMenu, function (index, item) {
        $(this).click(function (event) {
            // href 막기
            event.preventDefault();
            swPopular.slideTo(index + 1);
        });
    });


    popularMenu.eq(0).addClass('popular-menu-active');

    let swPopular = new Swiper('.sw-popular', {
        loop: true
    });

    swPopular.on('slideChange', function () {
        popularMenu.removeClass('popular-menu-active');
        popularMenu.eq(swPopular.realIndex).addClass('popular-menu-active');
    });


    // ap-kitchen sw
    let apMenu = $('.ap-menu a');
    $.each(apMenu, function (index, item) {
        $(this).click(function (event) {
            // href 막기
            event.preventDefault();
            swApKit.slideTo(index + 1);
        });
    });


    apMenu.eq(0).addClass('ap-menu-active');

    let swApKit = new Swiper('.sw-ap', {
    });

    swApKit.on('slideChange', function () {
        apMenu.removeClass('ap-menu-active');
        apMenu.eq(swApKit.realIndex).addClass('ap-menu-active');
    });

    // social sw
    let socialMenu = $('.social-menu a');
    $.each(socialMenu, function (index, item) {
        $(this).click(function (event) {
            // href 막기
            event.preventDefault();
            swSocial.slideTo(index + 1);
        });
    });


    socialMenu.eq(0).addClass('social-menu-active');

    let swSocial = new Swiper('.sw-social', {

    });

    swSocial.on('slideChange', function () {
        socialMenu.removeClass('social-menu-active');
        socialMenu.eq(swSocial.realIndex).addClass('social-menu-active');
    });












}