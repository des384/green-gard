$('.menu__btn').click(function (event) {
    $('.menu__btn,.menu').toggleClass('active');
    $('body').toggleClass('lock');
});

$(document).ready(function(){
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
            breakpoint: 1175,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            }
        },
        {
            breakpoint: 800,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
        }
    }
        ]
    });
  });