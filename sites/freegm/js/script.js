/* SLIDER */
 	var maxCounter = 14;
	var mg = 0;
	var delta = 660;
	var slider = document.getElementById('slider-ul');
	var sliderIcons = document.getElementsByClassName("who-slider-item");
	var iconsCounter = 0;
	if(document.body.clientWidth<=480)
		delta=542;
	function next() {
		if(mg==-8580){
				slider.style.marginLeft = "0px";
				mg=0;
				sliderIcons[iconsCounter].classList.remove("slider-active");
				iconsCounter=0;
				sliderIcons[iconsCounter].classList.add("slider-active");
				return 0;
			}
		mg-=delta;
		slider.style.marginLeft = mg+"px";
		sliderIcons[iconsCounter].classList.remove("slider-active");
		iconsCounter++;
		sliderIcons[iconsCounter].classList.add("slider-active");
		console.log("next");
	}
	function prev(){
		if(mg==0)
			return 0;
		mg+=delta;
		slider.style.marginLeft = mg+"px";
		sliderIcons[iconsCounter].classList.remove("slider-active");
		iconsCounter--;
		sliderIcons[iconsCounter].classList.add("slider-active");
		console.log("prev");
	}
	function itemClick(id) {
		sliderIcons[iconsCounter].classList.remove("slider-active");
		for(var i = 1; i<=maxCounter; i++){
			if(id=="slider-item"+i){
				console.log("2");
				if(iconsCounter+1<i){
					mg-=(i-1-iconsCounter)*delta;
					slider.style.marginLeft = mg+"px";
					iconsCounter=i-1;
					sliderIcons[iconsCounter].classList.add("slider-active");
					console.log("3");
					return 0;
				}else if(iconsCounter+1>i){
					mg+=(iconsCounter+1-i)*(delta);
					slider.style.marginLeft = mg+"px";
					iconsCounter=i-1;
					sliderIcons[iconsCounter].classList.add("slider-active");
					console.log("4");
					return 0;
				}
			}
		}
	}

	/* END OF SLIDER */
	var activeItem = document.getElementsByClassName("mmu-active");
	var listLangs = document.getElementsByClassName("main-screen-lang-list");
	var itemsContent = document.getElementsByClassName("main-screen-lang-item");

	function langMmu(mmucounter){
				activeItem[0].style.display = "none";
				activeItem[0].classList.remove("mmu-active");
				listLangs[0].style.display = "block";
}
/* */