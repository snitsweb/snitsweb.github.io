$( document ).ready(function() {

    $(".events__slider-wr").owlCarousel({
        nav:true,
        margin: 25,
        autoWidth:true,
        dots: false,
        loop: true,
        items: 1,
        responsive: {
            0 : {
                nav: false,
                touchDrag: true,
                mouseDrag: true,
                margin: 15
                

            },

            765 : {
                nav: true,
                touchDrag: false,
                mouseDrag: false,
                margin: 25

            }
        }
    });

    $('.events__slider-wr .owl-nav .owl-next').html('<svg width="12" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3536 4.70316C12.5488 4.5079 12.5488 4.19132 12.3536 3.99606L9.17157 0.814075C8.97631 0.618813 8.65973 0.618813 8.46447 0.814075C8.2692 1.00934 8.2692 1.32592 8.46447 1.52118L11.2929 4.34961L8.46447 7.17804C8.2692 7.3733 8.2692 7.68988 8.46447 7.88514C8.65973 8.08041 8.97631 8.08041 9.17157 7.88514L12.3536 4.70316ZM0 4.84961L12 4.84961V3.84961L0 3.84961L0 4.84961Z" fill="black"/></svg>');
    $('.events__slider-wr .owl-nav .owl-prev').html('<svg width="12" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.99605C0.451184 4.19132 0.451184 4.5079 0.646446 4.70316L3.82843 7.88514C4.02369 8.0804 4.34027 8.0804 4.53553 7.88514C4.7308 7.68988 4.7308 7.3733 4.53553 7.17804L1.70711 4.34961L4.53553 1.52118C4.7308 1.32592 4.7308 1.00934 4.53553 0.814075C4.34027 0.618813 4.02369 0.618812 3.82843 0.814075L0.646446 3.99605ZM13 3.84961L1 3.84961L1 4.84961L13 4.84961L13 3.84961Z" fill="black"/></svg>');
    
    $('.events__slider-wr').append('<div class="events__bg-right"></div>');

    //-------------------rating------------

    $('.rating__btns-facts').on('mouseenter',function(e){
      e.preventDefault();
      $(this).parent('.rating__btns').parent('.rating__item').addClass('active');
      $(this).parent('.rating__btns').parent('.rating__item').parent('.rating__item-wr').children('.rating__item-desc-wr').fadeIn();
      $(this).parent('.rating__btns').children('.rating__btns-arrow').addClass('rating__btns-arrow-active');

  });

    $('.rating__logo-wr, .rating__bonus, .rating__code-wr, .rating__review-wr, .rating__stars, .rating__btns-site').mouseenter(function(){
        $('.rating__item-desc-wr').fadeOut();
        $('.rating__btns-arrow').removeClass('rating__btns-arrow-active');
    });

    $('.rating__item-desc-wr').on('mouseleave',function(e){
      e.preventDefault();
      $(this).fadeOut();
      $(this).prev().children('.rating__btns').children('.rating__btns-arrow').removeClass('rating__btns-arrow-active');

  });

    $('.rating__btns-arrow').on('click',function(e){
      rtn_active = !rtn_active;
      e.preventDefault();
      $(this).parent('.rating__btns').parent('.rating__item').parent('.rating__item-wr').children('.rating__item-desc-wr').fadeToggle();
      $(this).toggleClass('rating__btns-arrow-active');
  });

    $('.rating__code-content-active').parent('.rating__code-item').parent('.rating__code-wr').parent('.rating__item').append('<div class="rating__item-help">Скопировать в буфер обмена</div>');
    $('.rating__item-help').css('display','none');

    $('.rating__code-content-active').hover(function(){
        $(this).parent('.rating__code-item').parent('.rating__code-wr').parent('.rating__item').children('.rating__item-help').fadeToggle();
    });

    $('.rating__code-content-active').click(function(){
        var $code = $('<input>');
        $('body').append($code);
        $code.val($(this).text()).select();
        document.execCommand("copy");
        $code.remove();

        $(this).parent('.rating__code-item').parent('.rating__code-wr').parent('.rating__item').children('.rating__item-help').html('<svg class="rating__item-help-ico" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1.32395L9.56152 -6.28779e-08L3.80761 5.2958L1.43848 3.20016L-1.97755e-07 4.52411L3.87243 8L11 1.32395Z" fill="#2E2E2E"/></svg> <span>Скопировано</span>');
        $(this).parent('.rating__code-item').parent('.rating__code-wr').parent('.rating__item').children('.rating__item-help').css('left', '370px');
    });

    //------rating mobile----------

    $('.rating__mobile-btn').click(function(e){
        e.preventDefault();
        $(this).parent('.rating__mobile-item-row').parent('.rating__mobile-item-wr').parent('.rating__mobile-item').children('.rating__mobile-desc-wr').slideToggle();
        $(this).hide();
    });

    $('.rating__mobile-close-wr').click(function(){
        $(this).parent('.rating__item-desc').parent('.rating__mobile-desc-wr').prev().children('.rating__mobile-item-row').children('.rating__mobile-btn').show();
        $(this).parent('.rating__item-desc').parent('.rating__mobile-desc-wr').slideToggle();
    });

    $('.rating__mobile-item').append('<div class="rating__item-help">Скопировать в буфер обмена</div>');

    $('.rating__item-help').css('display','none');

    $('.rating__mobile-price').hover(function(){
        $(this).parent('.rating__mobile-content').parent('.rating__mobile-box').parent('.rating__mobile-item-row').parent('.rating__mobile-item-wr').parent('.rating__mobile-item').children('.rating__item-help').fadeToggle();
    });

    $('.rating__mobile-price').click(function(){
        var $code = $('<input>');
        $('body').append($code);
        $code.val($(this).text()).select();
        document.execCommand("copy");
        $code.remove();

        $(this).parent('.rating__mobile-content').parent('.rating__mobile-box').parent('.rating__mobile-item-row').parent('.rating__mobile-item-wr').parent('.rating__mobile-item').children('.rating__item-help').html('<svg class="rating__item-help-ico" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1.32395L9.56152 -6.28779e-08L3.80761 5.2958L1.43848 3.20016L-1.97755e-07 4.52411L3.87243 8L11 1.32395Z" fill="#2E2E2E"/></svg> <span>Скопировано</span>');
    });

    //------------Events----------


    //-----------forecast---------



    $('.forecast__mobile-load').click(function(e){
        e.preventDefault();
        var text = $('.forecast__mobile-load').html();
        $('.forecast__tags-wr, .forecast__items-wr').toggleClass('active');
        
        if( text==forecast_load_def ){
            $(this).html('Скрыть');
        }
        else
        {
            $(this).html(forecast_load_def);
        }

    });

    onReasize();

    $(window).resize(onReasize);

});

var forecast_load_def = $('.forecast__mobile-load').html();

var rtn_active = false;

function onReasize(){
    console.log('reasize');

    if(document.documentElement.clientWidth < 1170){
        $('.bonuses__list').owlCarousel({
            nav:false,
            dots: false,
            autoWidth:true,
            items: 1,
            margin: 15,
            responsive: {
                0 : {
                    nav: false,
                    touchDrag: true,
                    items: 1
                },

                575 : {
                    items: 2
                },

                855 : {
                    items: 3
                }
            }
        });

        $('.news__article-content').owlCarousel({
            nav:false,
            dots: false,
            margin: 15,
            autoWidth: true,
            responsive: {
                0 : {
                    touchDrag: true,
                    items: 2
                },

                1160 : {
                    items: 3
                }
            }
        });

        $('.video__content').owlCarousel({
            nav:false,
            dots: false,
            margin: 15,
            autoWidth: true,
            responsive: {
                0 : {
                    touchDrag: true,
                    items: 2,
                },
                900 : {
                    items: 3
                }
            }
        });
    }
}




    //--------------------FAQ----------

    $('.about__faq-content').click(function(){
        $(this).parent('.about__faq-item').toggleClass('active');
        $(this).parent('.about__faq-item').children('.about__faq-answer-wr').fadeToggle();
        $(this).children('.about__faq-ico').children('svg').children('.about__faq-dot-top').toggleClass('active');
        $(this).children('.about__faq-ico').children('svg').children('.about__faq-dot-bottom').toggleClass('active');
    });