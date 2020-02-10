$( document ).ready(function() {

	//----------Sidebar MMU--------

	var slideout = new Slideout({
	    'panel': document.getElementById('main'),
	    'menu': document.getElementById('menu'),
	    'padding': 256,
	    'tolerance': 70,
	    'side' : 'right'
	  });

	 $('.main__mmu-btn').click(function(){
	 	slideout.toggle();
	 });
	    

   	slideout.on('beforeopen', function() {
   		$('.main__mmu-btn').toggleClass('is-active');
   	});

    slideout.on('beforeclose', function() {
   		$('.main__mmu-btn').toggleClass('is-active');
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
 	  		slideout.close();
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