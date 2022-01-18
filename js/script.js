$(document).ready(function () {
    AOS.init();
    // 안내창 닫기
    $('.modal').click(function () {
        $('.modal').fadeOut();
    });
    // ---gotop----
    $('.gotop').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        });
    });
    $(".gotop").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.gotop').fadeIn();

        } else {
            $('.gotop').fadeOut();

        }

    });


 
});