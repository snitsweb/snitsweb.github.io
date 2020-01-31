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
});

