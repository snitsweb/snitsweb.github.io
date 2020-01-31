$(document).ready(function() {
	$('.main-screen--button-href').click(function(){
       $('html, body').animate({scrollTop:$('#about-me').position().top}, 1200);
    });

    $('.link_1').click(function(){
       $('html, body').animate({scrollTop:$('#about-me').position().top}, 1200);
    });

    $('.link_2').click(function(){
       $('html, body').animate({scrollTop:$('#skills').position().top}, 1200);
    });

    $('.link_3').click(function(){
       $('html, body').animate({scrollTop:$('#portfolio').position().top}, 1200);
    });

});


