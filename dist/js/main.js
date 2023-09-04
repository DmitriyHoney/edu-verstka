$(document).ready(function() {
    Fancybox.bind("[data-fancybox]", {});
    
    $('.offer-slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        infinite: false,
        prevArrow: `<a href="#" class="btn-prev">
            <i class="fa fa-angle-left"></i>
        </a>`,
        nextArrow: `<a href="#" class="btn-next">
            <i class="fa fa-angle-right"></i>
        </a>`,
    });
    $('.about-card__slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 4,
        infinite: false,
        prevArrow: `<a href="#" class="btn-prev">
            <i class="fa fa-angle-left"></i>
        </a>`,
        nextArrow: `<a href="#" class="btn-next">
            <i class="fa fa-angle-right"></i>
        </a>`,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    arrows: false,
                }
            },
        ]
    });
    $('.news-list__slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 2,
        infinite: false,
        prevArrow: `<a href="#" class="btn-prev">
            <i class="fa fa-angle-left"></i>
        </a>`,
        nextArrow: `<a href="#" class="btn-next">
            <i class="fa fa-angle-right"></i>
        </a>`,
        responsive: [
            {
              breakpoint: 1500,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    arrows: false,
                }
            },
        ]
    });

    new Rellax('.paralax1', {
        speed: 2,
        center: false,
        wrapper: null,
        round: false,
        vertical: true,
        horizontal: false
    });
    new Rellax('.paralax2', {
        speed: 3,
        center: false,
        wrapper: null,
        round: false,
        vertical: true,
        horizontal: false
    });
    new Rellax('.paralax3', {
        speed: 3,
        center: false,
        wrapper: null,
        round: false,
        vertical: true,
        horizontal: false
    });
});