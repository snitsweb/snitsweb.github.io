$( document ).ready(function() {

	var top = $('header').height() + 24;
	if (top < $(window).scrollTop()) {
		$('header').addClass('fix');
	} else {
		$('header').removeClass('fix');
	}

	$(window).scroll(function(event) {
		var top = $('header').height() + 24;
		if (top < $(window).scrollTop()) {
			$('header').addClass('fix');
		} else {
			$('header').removeClass('fix');
		}
	});


	//----------Sidebar MMU--------


	$('.main__mmu-btn').click(function(){
		$('.mobile__mmu').toggleClass('menu-active');
		$('.main__logo-text').toggleClass('main__logo-text-active');
		$(this).toggleClass('is-active');
		$('.hamburger').toggleClass('active-mmu');

	});


   	//----------Sidebar MMU end --------

   	//----------Gallery-----------

   	loadGallery();

   	$('.gallery__btn').click(function(e){
   		e.preventDefault();
   		loadGallery();
   	});

   	//----------Gallery ends-----------

   	//----------Before after slider---------
   	$(".reviews__slide-left").twentytwenty();

   	$('.twentytwenty-left-arrow').html('<');
   	$('.twentytwenty-right-arrow').html('>');

 	 //----------Before after slider ends------------

 	 //----------Reviews slick slider----------------

 	 $('.reviews__slider-wr').slick({
 	 	draggable: false,
 	 	swipe: false,
 	 	responsive: [
 	 	{
 	 		breakpoint: 480,
 	 		settings: {
 	 			swipe: true
 	 		}
 	 	}
 	 	]
 	 });

 	 $('.slick-prev').html('<');
 	 $('.slick-next').html('>');

 	  //----------Reviews slick slider end----------------

 	  //----------Scrolling-nav function

 	  $('.link-scroll').on( 'click', function(){
 	  	var el = $(this);
 	  	var dest = el.attr('data-link-id')
 	  	if(el.hasClass('mmu-link')){
 	  		$('.mobile__mmu').removeClass('menu-active');
 	  		$('.main__logo-text').removeClass('main__logo-text-active');
			$('.main__mmu-btn').removeClass('is-active');
			$('.hamburger').removeClass('active-mmu');
 	  		if(dest !== undefined && dest !== '') { 
 	  			$('html').animate({scrollTop: $(dest).offset().top}, 1000);
 	  		}
 	  	} else {
 	  		if(dest !== undefined && dest !== '') { 
 	  			$('html').animate({scrollTop: $(dest).offset().top}, 500);
 	  		}
 	  	}
 	  	return false;
 	  });


 	  $('form').submit(function(event) {
 	  	console.log('submited');
 	  	$('.popup').fadeOut();
 	  	$('.popup__excursion').fadeIn();
 	  	$(this).find('input').val('');
 	  	$(this).find('textarea').val('');
 	  	return false;
 	  });


 	  $('[name="phone"]').mask("+7(999) 999-9999");



 	  //-------------cost form---------

 	  var formSteps = $('.cost__form-wr .cost-form-step');
 	  var stepNum = 0;

 	  $('.steps-all').html(formSteps.length);
 	  $('.cost__form-btn-next').click(function(e){
 	  	e.preventDefault();
 	  	if (stepNum+1 < formSteps.length) {
 	  		$(formSteps[stepNum]).css('display', 'none');
 	  		stepNum++;
 	  		$(formSteps[stepNum]).css('display', 'block');
 	  		$('.step-now').html(stepNum+1);
 	  		if(stepNum+1 == formSteps.length){
 	  			$('.cost__main-img').css('top', '-6px');
 	  		}
 	  	}
 	  });

 	  $('.cost__form-btn-back').click(function(e){
 	  	e.preventDefault();
 	  	if (stepNum > 0) {
 	  		$(formSteps[stepNum]).css('display', 'none');
 	  		stepNum--;
 	  		$(formSteps[stepNum]).css('display', 'block');
 	  		$('.step-now').html(stepNum+1);
 	  	}
 	  	
 	  }); 	  


 	  //--------------Document ready end-------------
 	});


//----------Gallery-----------

var galleryRows = $('.gallery__row');
var galleryIndex = 0;

function loadGallery(){
	if(galleryIndex + 1 > galleryRows.length)
		return 0;
	$(galleryRows[galleryIndex]).css('display', 'flex');
	galleryRows[galleryIndex].querySelector('.gallery__column').style.display = 'block';
	return galleryIndex++;
}


//----------Gallery ends-----------