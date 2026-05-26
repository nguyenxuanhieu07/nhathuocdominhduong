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
	$('.l-home-post').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		// dots: false,
		// prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		// nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
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

	// Initialize Category Slider (Lĩnh vực điều trị)
	$('.l-cate-slide').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '0px',
		infinite: true,
		arrows: false,
		dots: false,
		autoplay: false,
		speed: 400,
		cssEase: 'cubic-bezier(0.25, 1, 0.5, 1)',
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					dots: true,
					adaptiveHeight: true
				}
			}
		]
	});

	// Synchronize Tab Click -> Slide GoTo
	$('.l-cate-top .item').on('click', function () {
		const index = $(this).data('index');
		$('.l-cate-slide').slick('slickGoTo', index);
	});

	// Synchronize Slide Change -> Active Tab Update
	$('.l-cate-slide').on('afterChange', function (event, slick, currentSlide) {
		const index = currentSlide;
		const tabItem = $('.l-cate-top .item[data-index="' + index + '"]');
		$('.l-cate-top .item').removeClass('active');
		tabItem.addClass('active');

		// Smooth scroll active tab to center on mobile viewport
		const wrapper = $('.l-cate-top-wrapper');
		if (wrapper.length && window.innerWidth < 992) {
			const activeTabOffset = tabItem.position().left;
			const wrapperScrollLeft = wrapper.scrollLeft();
			const wrapperWidth = wrapper.width();
			const tabWidth = tabItem.outerWidth();
			const targetScroll = activeTabOffset + wrapperScrollLeft - (wrapperWidth / 2) + (tabWidth / 2);
			wrapper.animate({ scrollLeft: targetScroll }, 300);
		}
	});
});

