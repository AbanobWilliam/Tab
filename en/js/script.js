$(document).ready(function(){
    $('.loading').slideUp();
    $('.play-vid').click(function(e){
        e.preventDefault();
        $('.play-div').hide();
        $('video').get(0).play();
    });
    $('.mobile-button').click(function(e){
        e.preventDefault();
        $('header ul').slideToggle();
        $(this).toggleClass('opened');
    });
    $(document).on("scroll", onScroll);
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("header").addClass("grey-bg");
    }else{
        $("header").removeClass("grey-bg");
    }
});
$('.partners-carousel').owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    dots: true,
    nav: false,
    autoplay: true,
    rtl: true,
    responsive:{
        0:{
            items:1
        },
        360:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});


$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
        $(this).parent('li').removeClass('active');
    })
    $(this).parent('li').addClass('active');
     var target = this.hash,
     menu = target;
    $target = $(target);

   $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
    }, 600, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
});
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('header ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('header ul li a').parent('li').removeClass("active");
            currLink.parent('li').addClass("active");
        }
        else{
            currLink.parent('li').removeClass("active");
        }
    });
}