/**/ /* Bar Move */
(function() {

/**/ /* Bar Move */

	var TopBar = {
		bar: document.querySelector(".social-wrapper"),
		tab: document.querySelector(".social-tab"),
		position: 1
	};

	TopBar.tab.addEventListener("click",function(){
		if(TopBar.position == 1) {
			TopBar.bar.style.top = "0px";
			TopBar.position = 0;
		} else {
			TopBar.bar.style.top = "-54px";
			TopBar.position = 1;
		}			
	},false);


/**/ /* Menu */

	/*var Menu = {
		submenuElemsArr: document.getElementsByClassName("submenu"),
		submenuElemsCount: document.getElementsByClassName("submenu").length,
		trigger: 1
	};

	Menu.moveOver = function(e) {
		Menu.trigger = 1;

		for(var i = 0; i < Menu.submenuElemsCount; i++) {
			Menu.submenuElemsArr[i].style.display = "none";
		}

		e.currentTarget.querySelector(".submenu").style.display = "block";
	};

	Menu.moveOut = function(e) {
		var currTarget = e.currentTarget;
		Menu.trigger = 0;

		var st = setTimeout(function(){
			if(Menu.trigger == 0) {currTarget.querySelector(".submenu").style.display = "none";} 
		},1000);
	};

	Menu.init = function() {
		for(var i = 0; i < this.submenuElemsCount; i++) {
			this.submenuElemsArr[i].parentNode.addEventListener("mouseover", this.moveOver, false);
			this.submenuElemsArr[i].parentNode.addEventListener("mouseout", this.moveOut, false);	
		}
	};*/


/**/ /* Slider */
	var Slider = {
		elemsArr: document.getElementsByClassName("slide"),
		elemsCount: document.getElementsByClassName("slide").length,
		counter: 1
	};


	Slider.slideHandler = function(counter, elemsCount) {
		if(counter !== 0) {return counter - 1}
		return elemsCount-1;
	};

	Slider.navigateGenerator = function(count) {
		var navList = document.querySelector(".slider-nav_list"),
			navElement;

		for(var i = 0; i < count; i++) {
			navElement = document.createElement("li");
			navElement.setAttribute("class","nav-elem");
			navList.appendChild(navElement);
		}

		navList.childNodes[0].className = "nav-elem nav-elem_active";
	};

	Slider.navigateHandler = function(counter) {
		var elems = document.querySelector(".slider-nav_list").childNodes,
			curElem = elems[counter];

		for(var i = 0; i < elems.length; i++) {
			elems[i].setAttribute("class","nav-elem");
		}

		curElem.className += " nav-elem_active";
	};

	Slider.slideShow = function() {      
		var elems = Slider.elemsArr,
			elemsCount = Slider.elemsCount,
			slideHandler = Slider.slideHandler,
			slideNavigate = Slider.navigateHandler;

		elems[Slider.counter].style.opacity = "1";
		elems[slideHandler(Slider.counter,elemsCount)].style.opacity = "0";
		slideNavigate(Slider.counter);

		if(Slider.counter == elemsCount-1) {
			Slider.counter = 0;
		} else {
			Slider.counter++;
		}
	};


/**/ /* News Scroller */

	var Scroller = {
		elemsArr: document.getElementsByClassName("news-report"),
		elemsCount: document.getElementsByClassName("news-report").length,
		counter: 1
	};

	Scroller.getCompStyle = function(element, styleName) {
		if (element.currentStyle) {
			return element.currentStyle[styleName];
		}
		else if (window.getComputedStyle) {
			return window.getComputedStyle(element, null)[styleName];
		}
	};

	Scroller.newsHandler = function(counter,elemsCount) {
		if(counter !== 0) {return counter - 1}
		return elemsCount-1;		
	};

	Scroller.init = function(elem) { // + 95(2*)
		var counter = 0;
			scroller = setTimeout(function goTop(){
				var value = parseInt(Scroller.getCompStyle(elem, "top"), 10);
				elem.style.top = (value - 2) + "px";
				

				if(counter < 96) {
					counter++;
					scroller = setTimeout(goTop, 10);
					//console.log(value + "px");
					//console.log(elem);
				} else {
					clearTimeout(scroller);
				}
		},10);
	};


	Scroller.newsCleanUp = function(counter, elemsCount, elems) {
		for(var i = 0; i < elemsCount; i++) {
			if(i !== counter) {
				elems[i].style.display = "none";
				elems[i].style.top = "190px";
			}
		}	};

	Scroller.newsScroll = function() {
		var elems = Scroller.elemsArr,
			elemsCount = Scroller.elemsCount,
			scrollerHandler = Scroller.newsHandler,
			//scrollerInit = Scroller.init,
			scrollerCleanUp = Scroller.newsCleanUp;


		elems[Scroller.counter].style.display = "block";
		Scroller.init(elems[Scroller.counter]);
		Scroller.init(elems[scrollerHandler(Scroller.counter, elemsCount)]);

		setTimeout(function(){
			scrollerCleanUp(Scroller.counter, elemsCount, elems);
			
			if(Scroller.counter == elemsCount-1) {
				Scroller.counter = 0;
			} else {
				Scroller.counter++;
			}			
		}, 1100);
	};




	Menu.init();
	Slider.navigateGenerator(Slider.elemsCount);
	setInterval(Slider.slideShow, 3000);
	setInterval(Scroller.newsScroll, 5000);
})();













































/*

		elems[scrollerHandler(Scroller.counter, elemsCount)].style.top = "-190";
		elems[Scroller.counter].style.display = "block";
		elems[Scroller.counter].style.top = "0px";

*/





/*		setTimeout(scrollerCleanUp(Scroller.counter, elemsCount, elems), 1000);
		elems[Scroller.counter].className += " news-report_animate";
		elems[scrollerHandler(Scroller.counter, elemsCount)].className += " news-report_animate";
		elems[Scroller.counter].style.display = "block";

		console.log(scrollerHandler(Scroller.counter, elemsCount));
		console.log(Scroller.counter);

		elems[scrollerHandler(Scroller.counter, elemsCount)].style.top = "-190px";
		elems[Scroller.counter].style.top = "0px";*/








		/*

		elems[Scroller.counter].className += " news-report_animate";
		elems[scrollerHandler(Scroller.counter, elemsCount)].className += " news-report_animate";
		elems[Scroller.counter].style.display = "block";

		console.log(scrollerHandler(Scroller.counter, elemsCount));
		console.log(Scroller.counter);

		elems[scrollerHandler(Scroller.counter, elemsCount)].style.top = "-190px"
		elems[Scroller.counter].style.top = "0px";

		for(var i = 0; i < elemsCount; i++) {
			if(i !== Scroller.counter) {
				elems[i].setAttribute("class","news-report");
				elems[i].style.display = "none";

			}
		}			

		if(Scroller.counter == elemsCount-1) {
			Scroller.counter = 0;
		} else {
			Scroller.counter++;
		}



		*/