$( document ).ready(function() {

	$('.bonuses__nav-content').hide();

	$('.bonuses__nav-heading-wr').click(function(){
		$(this).parent('.bonuses__nav-wr').toggleClass('active');
		$(this).next().slideToggle();
		$(this).children('.bonuses__nav-heading-ico').toggleClass('active');
	});

});