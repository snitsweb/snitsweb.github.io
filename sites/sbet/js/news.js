$( document ).ready(function() {

	$('.news__nav-content').hide();

	$('.news__nav-heading-wr').click(function(){
		$(this).parent('.news__nav-wr').toggleClass('active');
		$(this).next().slideToggle();
		$(this).children('.news__nav-heading-ico').toggleClass('active');
	});

});