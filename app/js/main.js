$(document).ready(function () {
	// Toggle mobile menu
	$('.header-toggle').on('click', function () {
		$(this).toggleClass('is-active');
		$('.header-mobile-menu').toggleClass('is-open');
		$('body').toggleClass('overflow-hidden');
	});

	// Initialize Expert Slider
	$('.expert-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		dots: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					dots: false
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: true,
					dots: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: true,
					dots: false
				}
			}
		]
	});
});
