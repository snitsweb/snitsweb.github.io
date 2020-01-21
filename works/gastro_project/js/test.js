$( document ).ready(function(){

	checkScreens();

 	loadData();
 	cheangeScore();

 	$('.main__list-item').click(checkAnswer);

 	$('.main__popup-link').click(popup);
 	$('.popup__cancel').click(popupClose);

 	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:100,
	    nav:true,
	    items: 1

	});

	$('.popup__btn_close').click(popupClose);

	$('#popup-expert-btn').click(showExpert);

});

var item_false = 'main__list-item-false'; //class for false asnw
var item_true = 'main__list-item-true'; // class for true answ
var my_score = 0; // number of user's points
var container_num_quest = $('#main__num-quest');// div for num of questiton
var screen_number = 1; //number of screens

function checkScreens(){
	screen_number = document.getElementById('hidden-content').getElementsByTagName('div').length
}

var screen_counter = 1;
var is_selected = false;

function loadData(){
	if(screen_counter>screen_number)
		return 0;

	is_selected=false;

	$('#main__quiz, #main__num-quest').empty();

	var hidden_counter = '#quest-' + screen_counter;

	$((hidden_counter)+' > #num-quest').appendTo($('#main__num-quest'));
	$((hidden_counter)+' > #heading').appendTo(('#main__quiz'));
	$((hidden_counter)+' > #quest-answers').appendTo(('#main__quiz'));
	screen_counter++;
}

function checkAnswer (){

	var is_true = $(this).attr('data-id');

	if(is_selected)
		return 0;

	is_selected=true;
	if(is_true){
		$(this).addClass(item_true);
		my_score += 100;
		cheangeScore();
		setTimeout('loadData()', 2000);
	}
	else{
		$(this).addClass(item_false);
		setTimeout('loadData()', 2000);
	}
}

function cheangeScore(){
	$('#main__score-num').empty();
	$('#main__score-num').text(my_score);
}

function popup() {

	$('.page-wrapper').css('filter', 'blur(5px)');

	var popup_content_id =  $(this).attr('data-id-popup');
	var popup_content = document.getElementById(popup_content_id);
	if (popup_content.style.display == "none") {
	  	popup_content.style.display = "flex";
	  	$('.page-wrapper').css('filter', 'blur(5px)');
	} else {
  		popup_content.style.display = "none";
	}
}

function popupClose(){
	$('.page-wrapper').css('filter', 'blur(0px)');
	$('.popup').css('display', 'none');
}

function showExpert(){
	$('#popup-expert > .popup__content').css('display', 'none');
	$('.popup__expert-content').css('display', 'block');
}