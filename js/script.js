window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});

$(document).ready(function(){
    $('.feed__carousel').slick({
        speed: 1200,
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/Left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/Right.png"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]    
    });     
});