$( document ).ready(function() {

	location.hash = ""; 

	$(".owl-carousel").owlCarousel({
    margin:200,
    items:1,
    loop:true,
    dots: true,
    dotsEach: true,
    URLhashListener:true
	});

	$('.main__slider-link').click(function(){
		$('.main__slider-link').removeClass('main__slider-link-active');
		$(this).addClass('main__slider-link-active');
	});

	if(document.documentElement.clientWidth <= 766)
		restructuringMobile();

	window.addEventListener('resize',function(){
	    if(document.documentElement.clientWidth <= 766){
			restructuringMobile();
			checkHash();
		}
	});

	checkHash();

	$('.popup__cancel').click(popup);

	$('#main__button-next').click(nextSlide);

});

function checkHash(){
	$('.main__slider-link').removeClass('main__slider-link-active');

	if(window.location.hash.replace("#","")=="" && document.documentElement.clientWidth <= 480){
		$('#slider-link-1').css('display', 'inline-block');
		$('#slider-link-2').css('display', 'none');
		$('#slider-link-3').css('display', 'none');
		$("#slider-link-1").addClass('main__slider-link-active');
	}

	if(window.location.hash.replace("#","")=="slide1"){
		$("#slider-link-1").addClass('main__slider-link-active');
		$('#main__button-next').text("Далее");
		if (document.documentElement.clientWidth <= 480) {
			$('#slider-link-1').css('display', 'inline-block');
			$('#slider-link-2').css('display', 'none');
			$('#slider-link-3').css('display', 'none');
		}
	} else if (window.location.hash.replace("#","")=="slide2"){
		$("#slider-link-2").addClass('main__slider-link-active');
		$('#main__button-next').text("Далее");
		if (document.documentElement.clientWidth <= 480) {
			$('#slider-link-1').css('display', 'none');
			$('#slider-link-2').css('display', 'inline-block');
			$('#slider-link-3').css('display', 'none');
		}
	} else if (window.location.hash.replace("#","")=="slide3"){
		$("#slider-link-3").addClass('main__slider-link-active');
		$('#main__button-next').text("Выбрать уровень");
		if (document.documentElement.clientWidth <= 480) {
			$('#slider-link-1').css('display', 'none');
			$('#slider-link-2').css('display', 'none');
			$('#slider-link-3').css('display', 'inline-block');
		}
	}
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



function popup() {
  var popup_content = document.getElementById("popup");
  if (popup_content.style.display == "none") {
    popup_content.style.display = "flex";
  } else {
    popup_content.style.display = "none";
  }
}

function restructuringMobile(){

	var item_res_id = "#right_bar" //id of item
	var place_into_id = "#container_mobile"; //id for container
	var item_res = $(item_res_id);
	var place_into = $(place_into_id);

	item_res.detach();
	item_res.removeClass();
	item_res.addClass('wrapper_mobile')
	item_res.appendTo(place_into);

}

// function restructuringDesctop(){
// 	var item_res_id = "#container_mobile" //id of item
// 	var place_into_id = "#right_bar"; //id for container
// 	var item_res = $(item_res_id);
// 	var place_into = $(place_into_id);

// 	item_res.detach();
// 	item_res.removeClass();
// 	item_res.addClass('main__right-part')
// 	item_res.appendTo(document.getElementById('appendDesctop'));

// }