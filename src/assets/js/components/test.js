$(function () {
    "use strict";
    console.log("js working?");
});

//site navigation
$('.header-btn').on('click', function() {
    $('html,body').animate({scrollTop:$('.delivery-form-wrap').offset().top+"px"},{duration:1E3});
});

$('.service-btn').on('click', function() {
    $('html,body').animate({scrollTop:$('.price-img').offset().top+"px"},{duration:1E3});
});
//site navigation end

//images-zoom
$(document).ready(function() {
    $(".image").click(function(){
        var img = $(this);
        var src = img.attr('src');
        $("body").append("<div class='popup'>"+
            "<div class='popup_bg'></div>"+
            "<img src='"+src+"' class='popup_img' />"+
            "</div>");
        $(".popup").fadeIn(200);
        $(".popup_bg").click(function(){
            $(".popup").fadeOut(200);
            setTimeout(function() {
                $(".popup").remove();
            }, 200);
        });
    });
});
//images-zoom-end

//slider
$(document).ready(function() {
    $("a.first").fancybox();
    $("a.two").fancybox();
    $("a.video").fancybox({"frameWidth":520,"frameHeight":400});
    $("a.content").fancybox({"frameWidth":600,"frameHeight":300});
});
//slider-end