$(document).ready(function(){

	$('.popup-btn').click(function(e){
		e.preventDefault();
		var attr = $(this).attr('data-form');
		var popup = document.getElementById(attr);
		$(popup).fadeIn();
	});

	$('.popup').click(function(e){
		var container = $(".popup");
    	if(container.has(e.target).length === 0){
        	$('.popup').fadeOut();
        }
	});

	$('.popup__close').click(function(e){
        $('.popup').fadeOut();
	});

	

});