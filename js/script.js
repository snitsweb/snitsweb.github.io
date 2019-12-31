$(document).ready(function() {
    $('.nav-link-1').click(function(){
       $('html, body').animate({scrollTop:$('#header').position().top}, 2000);
    });

    $('.nav-link-2').click(function(){
       $('html, body').animate({scrollTop:$('#why').position().top}, 2000);
    });

    $('.nav-link-3').click(function(){
       $('html, body').animate({scrollTop:$('#footer__down').position().top}, 2000);
    });

    $('.nav-link-4').click(function(){
       $('html, body').animate({scrollTop:$('#footer').position().top}, 2000);
    });
});