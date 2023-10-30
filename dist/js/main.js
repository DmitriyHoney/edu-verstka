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
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                dots: false,
                arrows: false,
              }
            },
        ],
        adaptiveHeight: true
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
    $('.info-subscribe__slider').slick({
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
        variableWidth: true,
        responsive: []
    });
    $('.info-links').slick({
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.newsdetail-slider').slick({
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

    const switchs = document.querySelectorAll('.switch-parent');
    switchs.forEach((el) => {
        const input = el.querySelector('input');
        const span1 = el.querySelectorAll('.switch-label')[0];
        const span2 = el.querySelectorAll('.switch-label')[1];
        input.addEventListener('change', () => {
            span1.classList.remove('switch-label_act');
            span2.classList.remove('switch-label_act');
            if (input.checked) span1.classList.add('switch-label_act');
            else span2.classList.add('switch-label_act');
        });
    });

    initFeaturesPwdInputs();

    function initFeaturesPwdInputs() {
        const basePwdInputs = document.querySelectorAll('.base-input_pwd');
        basePwdInputs.forEach((el) => {
            const hideIcon = el.querySelector('.hide-pwd__icon');
            const showIcon = el.querySelector('.show-pwd__icon');
            const input = el.querySelector('input');
            showIcon.addEventListener('click', (e) => {
                e.preventDefault();
                el.classList.remove('base-input_hide');
                input.type = 'text';
            });
            hideIcon.addEventListener('click', (e) => {
                e.preventDefault();
                el.classList.add('base-input_hide');
                input.type = 'password';
            });
        });
    }

    let links = document.querySelectorAll('.header-navigation__item');
    const clearActLinks = () => {
        links.forEach((link) => {
            link.classList.remove('header-navigation__item_act');
        });
    };
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (link.classList.contains('header-navigation__item_act')) {
                link.classList.remove('header-navigation__item_act')
                return;
            }
            clearActLinks();
            link.classList.contains('header-navigation__item_act') 
                ?  link.classList.remove('header-navigation__item_act')
                : link.classList.add('header-navigation__item_act');
        });
    })

    $('ul#menu li').click(function(){
        $(this).children('ul').delay(20).slideDown(200);
   }, function(){
        $(this).children('ul').delay(20).slideUp(200);
   });

   $(function() {
    $('#main-menu').smartmenus({
        collapsibleBehavior:'accordion'
    });
  });

});