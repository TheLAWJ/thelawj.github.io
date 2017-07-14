'use strict';

$(function () {

	if ($('#submit')) {
		//Function calling
		window.onresize = function () {
			resize($('#submit'));
		};
		resize($('#submit'));
	};

	$('.slides').slick({ //slick slider initialization
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: $('.prevArrow'),
		nextArrow: $('.nextArrow'),
		responsive: [{
			breakpoint: 780,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		}]
	});
});

function resize(elem) {
	//Function for change button's name on resize
	if (window.innerWidth <= 400) {
		elem.value = 'Отправить';
	} else {
		elem.value = 'Отправить заявку';
	}
}
//# sourceMappingURL=main.js.map
