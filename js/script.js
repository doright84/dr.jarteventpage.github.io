$(document).ready(function () {
    AOS.init({
        once: true
    });
     // 안내창 닫기
     $('.modal').click(function () {
        $('.modal').fadeOut();
    });
    // ---scroll----
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('.head-top').addClass('head-top-on')
            $('.head-menu>li>a').addClass('head-menu-txt-on')
            $('.logo').addClass('logo-on')
        } else {
            $(".head-top").removeClass('head-top-on')
            $('.head-menu>li>a').removeClass('head-menu-txt-on')
            $('.logo').removeClass('logo-on')
        }
    })
    $('.head-gnb').mouseenter(function () {
        $('.sub-menu').stop().fadeIn();
        $('.head-top').addClass('head-top-hover-on')
        $('.head-menu>li>a').addClass('head-menu-txt-h-on')
        $('.logo').addClass('logo-on')
    });
    $('.head-gnb').mouseleave(function () {
        $('.sub-menu').stop().fadeOut();
        $('.head-top').removeClass('head-top-hover-on')
        $('.head-menu>li>a').removeClass('head-menu-txt-h-on')
        $('.logo').removeClass('logo-on')
    });
 
    // -----header------
    // 헤더 slide
    let head_sw = new Swiper('.head-sw-container', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 800,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

    });
    //-----thema-----
    // 테마 -하나 클릭시 다른거 사라짐-
    $(".thema-cont").hide().eq(0).show()
    $('.thema-menu>li').each(function () {
        $(this).click(function () {
            $(this).addClass('thema-on'); //클릭된 부분을 상단에 정의된 CCS인 selected클래스로 적용
            $(this).siblings().removeClass('thema-on'); //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
            $('.thema-title').removeClass('thema-txt-on');
            $(this).children('.thema-title').addClass('thema-txt-on');
            $(".thema-cont").hide()
            $(this).find(".thema-cont").show()
        });
    });
    // $(".thema-menu li").click(function(){
    //     let i = $(this).index();
    //     $(".thema-cont").hide().eq(i).show()
    // })

    //---------recommend-----------
    // 추천 recommend
    let bus_sw = new Swiper('.bus-sw-container', {
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: ".bus-pg",
            // 클릭이 가능하도록 처리
            clickable: true,
        },
    });
    let train_sw = new Swiper('.train-sw-container', {
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: ".train-pg",
            // 클릭이 가능하도록 처리
            clickable: true,
        },
    });


    //-----review---------
    let review_sw = new Swiper('.review-sw-container', {
        loop: true,
        slidesPerView: 5,
        slidesPerGroup: 1,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 800,
        navigation: {
            nextEl: '.review-next',
            prevEl: '.review-prev',
        },

    });
});