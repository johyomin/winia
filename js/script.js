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

    // gotop
    let go_top = $('.gotop');
    go_top.click(function () {
        $('html').animate({
            scrollTop: 0
        }, 500);
    });

    // swiper
    let swVisual = new Swiper('.sw-visual', {
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false
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
    // 클래스 popular menu 의 a태그를 변수로 선택하자
    let popularMenu = $('.popular-menu a');
    // popularMenu는 각각기능을한다
    // index는 순서이다 컴퓨터는 0번부터 시작한다
    // item은 html 의 태그이다
    // popularMenu의 태그가 순서대로 기능을 각각한다
    $.each(popularMenu, function (index, item) {
        // 이것은  popularMenu이다
        // 클릭하면 발생한다
        // a태그를 막아주고
        // 슬라이드를 하나씩 이동한다.
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


    // ap sw1
    // 클래스 ap-menu 의 모든 a태그를 변수 apMenu에 저장
    let apMenu1 = $('.apm1 a');
    // apMenu는 각각 기능을한다
    // index는 0부터 시작하는 숫자
    // item은 html의 태그를 뜻함
    $.each(apMenu1, function (index, item) {
        $(this).click(function (event) {
            // href 막기
            event.preventDefault();
            swAp1.slideTo(index);
        });
    });


    apMenu1.eq(0).addClass('ap-menu-active');


    let swAp1 = new Swiper('.sw-ap1', {});

    swAp1.on('slideChange', function () {
        apMenu1.removeClass('ap-menu-active');
        apMenu1.eq(swAp1.realIndex).addClass('ap-menu-active');
    });

// ap sw2
    // 클래스 ap-menu 의 모든 a태그를 변수 apMenu에 저장
    let apMenu2 = $('.apm2 a');
    // apMenu는 각각 기능을한다
    // index는 0부터 시작하는 숫자
    // item은 html의 태그를 뜻함
    $.each(apMenu2, function (index, item) {
        $(this).click(function (event) {
            // href 막기
            event.preventDefault();
            swAp2.slideTo(index);
        });
    });


    apMenu2.eq(0).addClass('ap-menu-active');


    let swAp2 = new Swiper('.sw-ap2', {});

    swAp2.on('slideChange', function () {
        apMenu2.removeClass('ap-menu-active');
        apMenu2.eq(swAp2.realIndex).addClass('ap-menu-active');
    });

// ap sw3
    // 클래스 ap-menu 의 모든 a태그를 변수 apMenu에 저장
    let apMenu3 = $('.apm3 a');
    // apMenu는 각각 기능을한다
    // index는 0부터 시작하는 숫자
    // item은 html의 태그를 뜻함
    $.each(apMenu3, function (index, item) {
        $(this).click(function (event) {
            // href 막기
            event.preventDefault();
            swAp3.slideTo(index);
        });
    });


    apMenu3.eq(0).addClass('ap-menu-active');


    let swAp3 = new Swiper('.sw-ap3', {});

    swAp3.on('slideChange', function () {
        apMenu3.removeClass('ap-menu-active');
        apMenu3.eq(swAp3.realIndex).addClass('ap-menu-active');
    });


    // social sw
    let socialMenu = $('.social-menu a');
    // apMenu는 각각 기능을한다
    // index는 0부터 시작하는 숫자
    // item은 html의 태그를 뜻함
    $.each(socialMenu, function (index, item) {
        $(this).click(function (event) {
            // href 막기
            event.preventDefault();
            swSocial.slideTo(index);
        });
    });


    socialMenu.eq(0).addClass('social-menu-active');


    let swSocial = new Swiper('.sw-social', {});

    swSocial.on('slideChange', function () {
        socialMenu.removeClass('social-menu-active');
        socialMenu.eq(swSocial.realIndex).addClass('social-menu-active');
    });






    // 소셜 탭 기능
    let recipeMenuA = $('.recipe-menu a');
    let recipeCont = $('.recipe-cont');
    $.each(recipeMenuA, function(index, item){
        
        $(this).mouseenter(function(){
            recipeCont.stop().fadeOut();
            recipeCont.eq(index).stop().fadeIn();
        });

    });

}