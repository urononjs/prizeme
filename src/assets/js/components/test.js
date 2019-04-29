$(function () {
    "use strict";
    console.log("js working?");
});


$('.header-btn').on('click', function() {
    $('html,body').animate({scrollTop:$('.delivery-form-wrap').offset().top+"px"},{duration:1E3});
});

$('.service-btn').on('click', function() {
    $('html,body').animate({scrollTop:$('.price-img').offset().top+"px"},{duration:1E3});
});


//images-zoom
$(document).ready(function() { // Ждём загрузки страницы
    $(".image").click(function(){	// Событие клика на маленькое изображение
        var img = $(this);	// Получаем изображение, на которое кликнули
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        $("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
            "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
            "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
            "</div>");
        $(".popup").fadeIn(200); // Медленно выводим изображение
        $(".popup_bg").click(function(){	// Событие клика на затемненный фон
            $(".popup").fadeOut(200);	// Медленно убираем всплывающее окн
            setTimeout(function() {	// Выставляем таймер
                $(".popup").remove(); // Удаляем разметку всплывающего окна
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