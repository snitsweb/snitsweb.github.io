$( document ).ready(function() {
	console.log( "ready!" );

    $('.header__nav-link, .header__mobile-item').mouseenter(function(e){
        e.preventDefault();
        if($(this).hasClass('active')){
            $('.header__nav-link').removeClass('active');
            $('.nav__popup').removeClass('active');
            $('.header__mobile-item').removeClass('active');
            return 0;
        }
        $('.header__mobile-item').removeClass('active');
        $('.header__nav-link').removeClass('active');
        $('.nav__popup').removeClass('active');
        $(this).toggleClass('active');
        var id = $(this).attr('data-id');
        $(id).toggleClass('active');
    });

    $('.nav__popup').mouseleave(function(e){
        e.preventDefault();
        if($(this).hasClass('active')){
            $('.header__nav-link').removeClass('active');
            $('.nav__popup').removeClass('active');
            $('.header__mobile-item').removeClass('active');
            return 0;
        }
        $('.header__mobile-item').removeClass('active');
        $('.header__nav-link').removeClass('active');
        $('.nav__popup').removeClass('active');
        $(this).toggleClass('active');
        var id = $(this).attr('data-id');
        $(id).toggleClass('active');
    });

    $('.header__attention-link').click(function(e){
        e.preventDefault();
        $('.header__nav-link').removeClass('active');
        $('.nav__popup').removeClass('active');
        var id = $(this).attr('data-id');
        $(id).toggleClass('active');
        console.log('done');
    });

    $('.nav__popup').mouseleave(function(){
        $(this).removeClass('active');
        $('.header__nav-link').removeClass('active');
    });

    $('.nav__popular-box').owlCarousel({
        mouseDrag: false,
        nav:true,
        margin: 25,
        autoWidth: true,
        dots: false,
        responsive: {
            0 : {
                nav: false,
                touchDrag: true,
                items: 1,
                center: true
            },

            480 : {
                nav: false,
                items: 2
            },
            765 : {
                nav: true,
                touchDrag: false
            },
            1300 : {
                items: 4

            },
            1500 : {
                items: 5

            },
            1900 : {
                items: 6

            }
        }
    });

    $('.nav__popular-box .owl-nav .owl-next').html('<svg class="nav__popular-arrow" width="65" height="110" viewBox="0 0 65 110" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7571 0L0 11.0001L43.0284 55.0007L0.00130703 98.9999L10.7584 110L65 54.5049L10.7571 0Z"/></svg>');
    $('.nav__popular-box .owl-nav .owl-prev').html('<svg class="nav__popular-arrow" width="65" height="110" viewBox="0 0 65 110" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54.2429 0L65 11.0001L21.9716 55.0007L64.9987 98.9999L54.2416 110L0 54.5049L54.2429 0Z"/></svg>');

    $('.nav__mobile-acordion').hide();

    $('.nav__mobile-mmu-title').click(function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });

    //--------------mobile bonus-----------

    $('.nav__mobile-bonus').click(function(){
        $('.main').toggleClass('active');
        $(this).toggleClass('active');
        $('.header__mobile-bonus-list').slideToggle();

    });

    $('.popup__cookie-wr').addClass('active');

    $('.popup__cookie-btn, .popup__cookie-wr').click(function(e){
        e.preventDefault();
        $('.popup__cookie-wr').removeClass('active');
    });

    });