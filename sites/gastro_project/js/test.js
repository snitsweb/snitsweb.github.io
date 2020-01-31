$( document ).ready(function(){

	location.hash = "slide1"; 

	checkScreens();
	loadData();
	cheangeScore();
	checkHash();
	$('.main__list-item').click(checkAnswer);
	$('.main__popup-link, .header__rules-link, #main__score').click(popup);
	$('.popup__cancel, .popup__btn_close').click(popupClose);
	$('.popup__bg').click(popupClose);
	$('#popup-prev-expert-btn').click(showInstr);
	
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:500,
		items: 1
	});

	$('#popup-expert-btn').click(showExpert);
	$('#popup-15_add').click(function(){
		timer1.time +=15;
		popupClose();
		$('.main__extra-link').addClass('main__link-dis');
	});
	$('#popup-expert-btn').click(function(){
		$('.main__expert-link').addClass('main__link-dis');
	});
	$('.main__instruction-link').click(function(){
		if (instr_used == false)
			timer1.time += 30;
		instr_used = true;
	});
	$('#popup_50-btn').click(function(){
		hideWrong();
		popupClose();
		$('.main__50-link').addClass('main__link-dis');
	});

	$('#popup-results').click(function(){
		$('#popup-results').css('display', 'none');
		$('.page-wrapper').css('filter', 'blur(0px)');
		$('.popup__bg').css('display', 'none');
	});
	$('#popup-expert-body').click(function(){
		$(this).css('display', 'none');
		$('.page-wrapper').css('filter', 'blur(0px)');
		$('.popup__bg').css('display', 'none');
	})


	$('#popup-expert-body, #popup-expert, #popup-rules, #popup-results').click(function(){
		$(this).css('display', 'none');
		$('.page-wrapper').css('filter', 'blur(0px)');
		$('.popup__bg').css('display', 'none');
	});
    $("#popup-expert-body div, #popup-expert div, #popup-rules div, #popup-results div").click(function(e) {
        e.stopPropagation();
   });  
	// $('#popup-rules').click(function(){
	// 	$(this).css('display', 'none');
	// 	$('.page-wrapper').css('filter', 'blur(0px)');
	// 	$('.popup__bg').css('display', 'none');
	// })

	//******IMG
	// $('#popup-15_add').click(function(){
	// 	$('.main__extra-pic').attr('src','../img/test/50-icon-dis.svg');
	// });

	// *********************TIMER*********
	const circle = document.querySelector('.progress-ring__circle');
	const radius = circle.r.baseVal.value;
	const circumrefence = 2 * Math.PI * radius;

	circle.style.strokeDasharray = ` ${circumrefence}  ${circumrefence}`;
	circle.style.strokeDashoffset = circumrefence;

	function setProgress(percent) {
		const offset = circumrefence - percent / 100 * circumrefence;
		circle.style.strokeDashoffset = offset;
	}
	//**********************TIMER**************

	setInterval(function(){
		var curVal = $("#main__timer").val();
		var prevVal  = $("#main__timer").data("prevVal") || null;
		if (prevVal !== curVal) {
			if(timer1.time/time*100>100)
				setProgress(100);
			else
				setProgress(timer1.time/time*100);
		}
	}, 100);


	$('.main__slider-link').click(function(){
		$('.main__slider-link').removeClass('main__slider-link-active');
		$(this).addClass('main__slider-link-active');
	});


});

//*******************END OF DOCUMENT>READY

var row_active_class = 'table__row-active';
var item_false = 'main__list-item-false'; //class for false asnw
var item_true = 'main__list-item-true'; // class for true answ
var my_score = 0; // number of user's points
var container_num_quest = $('#main__num-quest');// div for num of questiton
var screen_number = 1; //number of screens
var time_ended = false;
var instr_used = false; // if instruction used
var wrong_list = []; // list of wrong answers
var time = 30; // setting of timer 
var fps = 60;

function checkHash(){
	$('.main__slider-link').removeClass('main__slider-link-active');

	if(window.location.hash.replace("#","")=="" && document.documentElement.clientWidth <= 480){
		$('.slider-link-1').css('display', 'inline-block');
		$('.slider-link-2').css('display', 'none');
		$('.slider-link-3').css('display', 'none');
		$('.slider-link-1').addClass('main__slider-link-active');
		console.log("1");
	}

	if(window.location.hash.replace("#","")=="slide1"){
		$(".slider-link-1").addClass('main__slider-link-active');
		if (document.documentElement.clientWidth <= 480) {
			$('.slider-link-1').css('display', 'inline-block');
			$('.slider-link-2').css('display', 'none');
			$('.slider-link-3').css('display', 'none');
			console.log("2");
		}
	} else if (window.location.hash.replace("#","")=="slide2"){
		$(".slider-link-2").addClass('main__slider-link-active');
		if (document.documentElement.clientWidth <= 480) {
			$('.slider-link-1').css('display', 'none');
			$('.slider-link-2').css('display', 'inline-block');
			$('.slider-link-3').css('display', 'none');
			console.log("3");
		}
	} else if (window.location.hash.replace("#","")=="slide3"){
		$(".slider-link-3").addClass('main__slider-link-active');
		if (document.documentElement.clientWidth <= 480) {
			$('.slider-link-1').css('display', 'none');
			$('.slider-link-2').css('display', 'none');
			$('.slider-link-3').css('display', 'inline-block');
			console.log("4");
		}
	}
}


function checkScreens(){
	screen_number = document.getElementById('hidden-content').getElementsByTagName('div').length
}

var screen_counter = 1;
var is_selected = false;

function loadData(){

	timer1.start();
	console.log('Load data');
	if(screen_counter>screen_number){
		timer1.stop();
		return 0;
	}
	is_selected=false;
	$('#main__quiz, #main__num-quest').empty();
	var hidden_counter = '#quest-' + screen_counter;
	$((hidden_counter)+' > #num-quest').appendTo($('#main__num-quest'));
	$((hidden_counter)+' > #heading').appendTo(('#main__quiz'));
	$((hidden_counter)+' > #quest-answers').appendTo(('#main__quiz'));
	screen_counter++;
	timer1.time = time;
}

function checkAnswer (){

	var is_true = $(this).attr('data-id');
	if(is_selected)
		return 0;
	is_selected=true;
	if(is_true){
		$(this).addClass(item_true);
		my_score += 1;
		cheangeScore();
		timer1.stop();
	}
	else{
		$(this).addClass(item_false);
		timer1.stop();
	}

	if(screen_counter>screen_number)
		timer1.stop();
}

function cheangeScore(){
	$('.main__score-num').empty();
	$('.main__score-num').text(my_score);
	$('.header__score-num').text(my_score);
}	

function popup() {
	$('.page-wrapper').css('filter', 'blur(5px)');
	$('.popup__bg').css('display', 'flex');
	$('.slider-link-1').addClass('main__slider-link-active');
	var popup_content_id =  $(this).attr('data-id-popup');
	var popup_content = document.getElementById(popup_content_id);
	if (popup_content.style.display == "none") {
		popup_content.style.display = "flex";
		$('.page-wrapper').css('filter', 'blur(5px)');
	} else {
		popup_content.style.display = "none";
	}
	if($(this).attr('id')=='main__score'){
		var row_active = parseInt($(this).data('level'), 10) + 1;
		$('.popup__tbody > .table__row:nth-child('+row_active+')').addClass(row_active_class);
	}
}

function popupClose(){
	$('.page-wrapper').css('filter', 'blur(0px)');
	$('.popup').css('display', 'none');
	$('.popup__bg').css('display', 'none');
}

function showExpert(){
	$('#popup-expert').css('display', 'none');
	$('#popup-expert-body').css('display', 'block');
}

function showInstr(){
	$('.popup__prev-content').css('display', 'none');
	$('#popup-instruction-body').css('display', 'block');
}

var Timer = function(obj){
	this.time = obj.time;
	this.fps = obj.fps;
	this.onEnd = obj.onEnd || null;
	this.onStart = obj.onStart || null;
	this.onTick = obj.onTick || null;
	this.intervalID = null;

	this.start = () => {
		this.interval = setInterval(this.update, 1000 / this.fps);
		this.onStart ? this.onStart() : void 0;
		return this;
	};
	this.stop = () => {
		clearInterval(this.interval);
		this.onEnd ? this.onEnd() : void 0;
	};
	this.update = () => {
		this.time > 0 ? this.time -= 1/this.fps : this.stop();
		this.onTick ? this.onTick() : void 0;
		return this.get();
	}
	this.get = (par) => {
		switch(par) {
			case undefined:
			return this.time;
			break;
			case "dig":
			return Math.ceil(this.time);
			break;
			case "end":
			return this.onEnd();
			break;
		}
	}
}

var timer1 = new Timer({
	time: time,
	fps: fps,
	onTick: tick,
	onEnd: endTimer,
	onStart: onTimerStart
});

function onTimerStart(){
	console.log("timer started");
}

function endTimer(){
	console.log("timer ended");
	setTimeout('loadData()', 500);
}

requestAnimationFrame(tick);

function tick(){
	id("main__timer").innerHTML = timer1.get("dig")+"<span>сек<span>";
}

function id(id){
	return document.getElementById(id);
}

function hideWrong(){
	console.log('start');
	wrong_list = $('.main__quiz > ul > li');
	console.log(wrong_list);
	for(var i = 0;i<2;i++){
		var index = randomInteger(0,3);
		console.log('index = ' + index);
		var el = wrong_list[index];
		console.log('el =');
		console.log(el);
		if(el.getAttribute('data-id')==true){
			i--;
			console.log('data id has ok');
		} else {
			console.log('data id dont has ok');
			el.style.visibility = "hidden";
		}
	}
}

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function nextSlide(){
	if(window.location.hash.replace("#","")=="slide1"){
		location.hash = "slide2"; 
	} else if (window.location.hash.replace("#","")=="slide2"){
		location.hash = "slide3"; 
	} else if (window.location.hash.replace("#","")=="slide3"){
		popup();
	}	else {
		location.hash = "slide2"; 
	}
	return 0;
}


