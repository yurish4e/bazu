$(document).ready(function () {
     /*плавный переход к якорю*/
    $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
  });
    
    /*menu*/
    $('.menu_switcher').click(function () {
         $(".header").addClass("header_open", 2500, "easeOutSine");
     });
    $('.menu_close').click(function () {
         $(".header").removeClass("header_open", 2500, "easeOutSine");
     });
    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".header"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 && $(".menu")) { // и не по его дочерним элементам
			$(".header").removeClass("header_open", 2500, "easeOutSine");
		}
	});
    /*menu*/
    $.ionTabs("#tabs_1");
    $('#section_1').appear();
    $('#section_2').appear();
    $('#section_3').appear();
    $('#section_1').on('appear', function (event, $all_appeared_elements) {
        $(".section_background_back_1").addClass("background_visible");
        $(".section_background_front_1").addClass("background_visible");
        $(".bg_show_1").addClass("bg_show_visible");
        // this element is now inside browser viewport
    });
    $('#section_2').on('appear', function (event, $all_appeared_elements) {
        $(".back_2_element_bg").addClass("back_3_element_scale");
        $(".section_background_front_2").addClass("background_visible");
        $(".bg_show_2").addClass("bg_show_visible");
        // this element is now inside browser viewport
    });
    $('#section_3').on('appear', function (event, $all_appeared_elements) {
        $(".back_3_element_bg").addClass("back_3_element_scale");
        $(".section_background_front_3").addClass("background_visible");
        $(".bg_show_3").addClass("bg_show_visible");
        // this element is now inside browser viewport
    });

   

    if ($(window).width() < 1024) {
        $('.offer_content1').slick({
            autoplay: false,
            dots: false,
            arrows: false,
            fade: true,
            autoplaySpeed: 1500,
            infinite: false
        });
        $('.help').slick({
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            infinite: false,
            arrows: false,
            speed: 300
        });
        $('.problems_row_1').slick({
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            infinite: false,
            arrows: false,
            speed: 300
        });
        $(".offer_content").addClass("owl-carousel");
        $(".offer_content").addClass("owl-theme");
        $(".offer_content").owlCarousel({
            items: 1,
            dots: false,
            arrows: false
        });

    }
});