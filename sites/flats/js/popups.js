$( document ).ready(function() {


	$('.btn-popup').click(function(e){
		var el = $(this);
		e.preventDefault();
		var popup = $('.' +el.attr('data-popup')).fadeIn();
	});

	$('.popup').click(function(e){
		var container = $(".popup");
		if (container.has(e.target).length === 0){
			container.fadeOut();
		}
	});

	$('.popup__close').click(function(){
		$('.popup').fadeOut();
	});


	var inputs = document.querySelectorAll('#popup__review-file');
	Array.prototype.forEach.call(inputs, function (input) {
		var label = input.nextElementSibling,
		labelVal = label.innerHTML;

		input.addEventListener('change', function (e) {
			var fileName = '';
			if (this.files && this.files.length > 1)
				fileName = ( this.getAttribute('data-multiple-caption') || '' ).replace('{count}', this.files.length);
			else
				fileName = e.target.value.split('\\').pop();

			if (fileName)
				label.querySelector('span').innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});
	});

});
