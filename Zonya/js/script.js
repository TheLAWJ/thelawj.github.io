$(function(){

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
	$('.header__burger').on('click', function(){
		$('.header__menu').slideToggle(700, function(){
			if($(this).css('display') === 'none'){
				$(this).removeAttr('style');
			}
		});
	});
	new WOW({
		offset : 100
	}).init();
});