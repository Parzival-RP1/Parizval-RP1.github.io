$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 48 ) {
            $('.header').addClass('header--sticky');
            $('body').addClass('is-scrolling');
        }
        else {
            $('.header').removeClass('header--sticky');
            $('body').removeClass('is-scrolling');
        }
    });
});