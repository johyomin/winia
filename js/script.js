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
    let swvisual = new Swiper('.sw-visual', {
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
            swvisual.autoplay.stop();

        } else {

            $(this).removeClass('sw-visual-play');
            // 슬라이드 재생
            swvisual.autoplay.start();

        }




    });


};

window.onload = function () {

    let swMenu = new Swiper('.sw-menu', {
        slidesPerView: 4
    });

    let swItem = new Swiper('.sw-item', {
        loop: true,
        thumbs: {
            swiper: swMenu,
        },
    });



}