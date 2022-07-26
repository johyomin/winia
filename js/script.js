// $(document).ready(function () {
//     $('html').css('overflow', 'hidden');

//     let modalWrap = $('.modal-wrap');
//     let modalClose = $('.modal-close');
//     modalClose.click(function () {
//         modalWrap.stop().fadeOut(100);
//         $('html').css('overflow', 'auto');
//     });

//     let modalMain = $('.modal-main');
//     modalMain.click(function (event) {
//         event.stopPropagation();
//     });
//     modalWrap.click(function () {
//         modalWrap.stop().fadeOut(100);
//         $('html').css('overflow', 'auto');
//     });

// });

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

    // 탭메뉴를 저장한다.
    let slideMenu = $('.slide-menu a');
    $.each(slideMenu, function (index, item) {
        $(this).click(function (event) {
            // href 막기
            event.preventDefault();
            swSlide.slideTo(index + 1);;
        });
    });

    // 처음 에 슬라이드 표현을 위해서 0 번이 포커스 된다.
    slideMenu.eq(0).addClass('slide-menu-active');

    let swSlide = new Swiper('.sw-slide', {
        loop: true
    });

    swSlide.on('slideChange', function () {
        // 일단 모두 포커스 class 지운다.
        slideMenu.removeClass('slide-menu-active');
        // 나는 포커스 들어간다.
        slideMenu.eq(swSlide.realIndex).addClass('slide-menu-active');
    });

};