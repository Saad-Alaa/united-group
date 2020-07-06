$(document).ready(function () {

    $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        rtl: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
    },
            {
                breakpoint: 950,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
]
    });

    $(".center").slick({
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        rtl: true,
        responsive: [
            {
                breakpoint: 1035,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
    },
            {
                breakpoint: 950,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 501,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
]

    });

    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        rtl: true
    });

    var tab = $('.tab-pane').siblings();

    $('.list-group-item').on('click', function (e) {
        e.preventDefault();
        var panel = $(this).attr('number');
        var tab = ".tab-pane" + panel;
        console.log(tab);
        $(tab).fadeIn(1000);
        $(tab).siblings().hide();
    })
});

$(window).on('load', function () {

    $('.load-img').fadeOut(1000, function () {
        $('.loading').fadeOut(2000, function () {
            $('body').css('overflow', 'auto');
            $(this).remove();
        });
    });
});





//        $(this).siblings().css('border', '1px solid #F00');
//        //        $(this).parents('.row').find("div.tab-pane").css('border', '1px solid #00f');
