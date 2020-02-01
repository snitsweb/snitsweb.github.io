$(document).ready(function(){

  $('.trainers__slider').slick({
  	centerMode: true,
 	centerPadding: '100px',
  	slidesToShow: 2,
  	infinite: true,
  	variableWidth: true,
  	responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
        centerPadding: '0px'
      	}
  	}]
  });

  //-------------Buttons------------

  var act_btn = $('.slick-current .trainers__bth');
  changeBtn();

  $('.trainers__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  		act_btn.css('background-color','transparent');
 		act_btn.css('color','#f7a600');
  });

  $('.trainers__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
 		act_btn = $('.slick-current .trainers__bth');
 		changeBtn();
	});

	function changeBtn(){
		act_btn.css('background-color','#f7a600');
		act_btn.css('color','#fff');
	}

	//---------------Arrows---------

	$('.slick-prev').html('<span>&#8592;</span>');
	$('.slick-next').html('<span>&#8594;</span>');

  //-------------Offer selecter--------

  $('.offer__item').click(offerSelect);

  var index;

  //-------------REVIEWS----------

  $('.reviews__slider').slick();
  $('.reviews__slider > .slick-prev').html('<span>&#8592;</span>');
  $('.reviews__slider > .slick-next').html('<span>&#8594;</span>');

  $('.reviews__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    loadRevInfo();
  });

  $('.reviews__info-wr .slick-next').click(function(){
    $('.reviews__slider').slick('slickNext');
    loadRevInfo();
  });

  $('.reviews__info-wr .slick-prev').click(function(){
    $('.reviews__slider').slick('slickPrev');
    loadRevInfo();
  });
  
  loadRevInfo();

});


function offerSelect(){
  $('.offer__item').removeClass('offer__active');
  $(this).addClass('offer__active');
}



//-----------REVIEWS SLIDER-------------

var used = false;

function loadRevInfo(){

    var blockInfoPrev = $('.reviews__left-info');
    var blockInfoNext = $('.reviews__right-info');

    var currentSlide = $('.reviews__slider').slick('slickCurrentSlide');
    var prevName = $('[data-slick-index = ' + (currentSlide-1) + ' ] > .reviews__slide-heading').text();
    var prevDate = $('[data-slick-index = ' + (currentSlide-1) + ' ] > .slide-date').text();
    console.log(prevName + ' ' + prevDate);
    var nextName = $('[data-slick-index = ' + (currentSlide+1) + ' ] > .reviews__slide-heading').text();
    var nextDate = $('[data-slick-index = ' + (currentSlide+1) + ' ] > .slide-date').text();

    $('.reviews__info-name').detach();
    $('.reviews__info-date').detach();
    blockInfoPrev.append('<span class="reviews__info-name">' + prevName + '</span> <span class="reviews__info-date">' + prevDate + '</span>');
    blockInfoNext.append('<span class="reviews__info-name">' + nextName + '</span> <span class="reviews__info-date">' + nextDate + '</span>');
  }

  //-----------REVIEWS SLIDER ENDS-------------