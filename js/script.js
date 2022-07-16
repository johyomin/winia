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
    new Swiper('.sw-visual', {
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

};