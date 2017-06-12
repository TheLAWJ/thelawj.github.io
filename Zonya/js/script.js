$(function(){
	//sliders
	$('.slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: false,
	  arrows : false,
	  speed: 500,
	  fade: true,
	  autoplay: true,
	  autoplaySpeed : 10000,
	  draggable:false,
	  swipe: false,
	  touchMove:false,
	});
		$('.blog__postscarousel').slick({
	  infinite: false,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  dots: false,
	  arrows : false,
	  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
			  dots: false,
			  arrows : false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
			  dots: false,
			  centerMode: true,
			  arrows : false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
			  dots: false,
			  centerMode: true,
			  arrows : false
      }
    }
  ]
	});
		//Burger menu
	$('.header__burger').on('click', function(){
		$('.header__menu').slideToggle(700, function(){
			if($(this).css('display') === 'none'){
				$(this).removeAttr('style');
			}
		});
	});
	// wow.js + animate.css
	new WOW({
		offset : 300
	}).init();
	//menu animate

	//Слайд ту
  var optionse = {
  		menu : '.menu',
  		button : '#buttonScroll',
  		menuItems : '.menu a',
  		menuWrap : '#home'
  	};
  	console.log($(optionse.menuWrap));
		setTimeout(function(){
			$(optionse.menuWrap).slideDown(400);
		}, 400);
  $(optionse.menuItems).on('click', function(e){
			e.preventDefault();
			// console.log($(this));
			var height = $($(this).attr('href'));
			
			$('html, body').animate({
				scrollTop : height.offset().top
			}, 1400);
		});
  	slideLight();
	   function slideLight(){
	   	//console.log($(optionse.menuItems).length);
	   	var menu = $(optionse.menuItems);
	   	for(var i = 0; i < menu.length; i++){
	   		var elem = $($(menu[i]).attr('href'));
	   		// console.log(menu.css('height'));
	   		// console.log($(window).scrollTop());
	   		// console.log(elem);
	   		// console.log(elem.offset().top);
	   		// console.log(parseInt(elem.css('height')));
	   		// console.log(elem.offset().top + parseInt(elem.css('height')));
	   		// console.log(menu[i]);
	   		// console.log('finish');
	   		// console.log(elem.offset().top + elem.css('height'));
	   		// console.log($(window).scrollTop());
	   		if (($(window).scrollTop() >= elem.offset().top - 300 ) && ($(window).scrollTop() <= elem.offset().top + parseInt(elem.css('height')) -300)){
	   			// console.log($($(menu[i]).attr('href')).offset().top);
	   			// console.log($($(menu[i]).attr('href')).css('height'));
	   			// console.log(1);
	   			// console.log(elem);
	   			$(menu).children().removeClass('activeLink');
	   			$(menu[i]).children().addClass('activeLink');

	   		}
	   		if($(window).scrollTop() <= 650){
	   			$(menu).children().removeClass('activeLink');
	   			$(menu[0]).children().addClass('activeLink');
	   		}
	   	}
	   }
	   $(window).on('scroll',slideLight);
   	 function scrollFunc(){
	     if($(this).scrollTop() >= 700){
	     	$(optionse.button).fadeIn();
	     }
	     else{
	     	$(optionse.button).fadeOut();
	     }
	   }
	   $(window).on('scroll',scrollFunc);
	   $(optionse.button).on('click', function(e){
	   		e.preventDefault();
	   		$('html, body').animate({
	   			scrollTop : $(optionse.menu).offset().top
	   		}, 1400);
			
    });
	   scrollFunc();
});
