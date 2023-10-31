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

    const links = document.querySelectorAll('.header-navigation__item');
    const clearActLinks = () => {
        links.forEach((link) => {
            link.classList.remove('header-navigation__item_act');
        });
    };
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            const isParentLink = e.target.classList.contains('header-navigation__item-main');
            const hasChilds = e.target.parentElement.classList.contains('header-navigation__menu__list-item_childs');
            if (isParentLink) {
                if (!e.target.parentElement.classList.contains('header-navigation__menu__list-item_childs')) {
                    console.log(111);
                }
                e.preventDefault();
                if (link.classList.contains('header-navigation__item_act')) {
                    link.classList.remove('header-navigation__item_act')
                    return;
                }
                clearActLinks();
                link.classList.contains('header-navigation__item_act') 
                    ?  link.classList.remove('header-navigation__item_act')
                    : link.classList.add('header-navigation__item_act');
            } else if (hasChilds) {
                e.preventDefault();
                e.target.parentElement.classList.toggle('header-navigation__menu__list-item_childs_act')
            }
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

    //   el.offsetHeight
    const offCanvas = UIkit.offcanvas(document.querySelector('#offcanvas-usage'));
    const bar = document.querySelector('#offcanvas-usage .uk-offcanvas-bar');
    const menubtn = document.querySelector('.header-bottom__menubtn');
    const closebtn = document.querySelector('.close-offcanvas');
    const logoSidebar = document.querySelector('.leftsidebar-logo');
    if (closebtn) {
        closebtn.addEventListener('click', (e) => {
            bar.style.overflow = 'hidden';
            e.preventDefault();
            e.stopPropagation();
            offCanvas.hide();
        });
    }
    if (menubtn) {
        const sidebarParent = document.querySelector('.new-leftsidebar')
        const sidebar = document.querySelector('.leftsidebar-wrap')
        menubtn.addEventListener('click', (e) => {
            e.preventDefault();
            offCanvas.show({
                'esc-close': true,
                'bg-close': true
            });
            if (sidebar.offsetHeight < sidebarParent.offsetHeight) {
                sidebar.style.height = '100%';
            } else {
                sidebar.style.height = 'unset';
            }
            const tId = setTimeout(() => {
                bar.style.overflow = 'auto';
                clearTimeout(tId);
            }, 500)
        });
    }
    if (logoSidebar) {
        logoSidebar.addEventListener('click', (e) => {
            e.stopPropagation();
            if (e.target.parentElement.href) {
                window.location.href = e.target.parentElement.href;
            }
        });
    }
    if (bar) {
        bar.addEventListener('click', (e) => {
            if (e.target.href) {
                window.location.href = href;
            }
            bar.style.overflow = 'hidden';
            e.preventDefault();
            e.stopPropagation();
            offCanvas.hide();
        });
    }
});