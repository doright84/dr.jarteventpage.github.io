$(document).ready(function () {
    AOS.init();
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