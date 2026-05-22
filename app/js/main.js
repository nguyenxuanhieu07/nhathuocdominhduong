var global_function={
	init: function() {
		global_function.show_menu_mb();
		global_function.show_result_select();
		global_function.show_select_point();
		if(window.innerWidth<=767) {
			var track=jQuery('.list-number');
			if(track.length>0) {
				track.append(track.html());
				var totalWidth=track[0].scrollWidth/2;
				track.css('--scroll-width',`${totalWidth}px`);
			}
		}
	},
	show_menu_mb: function() {
		var btn_menu=jQuery('.btn-menu-mb');
		var btn_menu_dropdown=jQuery('.dropdown-toggle');
		if(btn_menu.length>0) {
			btn_menu.on('click',function() {
				jQuery('.menu-header').toggleClass('show-menu');
				return false;
			});
		}
		if(btn_menu_dropdown.length>0) {
			jQuery('.nav-item').on('click',function() {
				jQuery('.dropdown-menu').removeClass('show');
			});
			btn_menu_dropdown.on('click',function() {
				jQuery(this).closest('.nav-item').find('.dropdown-menu').toggleClass('show');
				return false;
			});
		}
	},
	show_result_select: function() {
		var item=jQuery('.show-select-option');
		if(item.length>0) {
			item.on('click',function() {
				jQuery(this).closest('.box-side-form').find('.select-result').toggleClass('show');
			});
		}
	},
	show_select_point: function() {
		var item=jQuery('.mb-selectpoint');
		if(item.length>0) {
			item.on('click',function() {
				jQuery(this).closest('.apoitment-form').find('.box-point').toggleClass('show');
			});
		}
	},
}
var slider_function={
	init: function() {
		slider_function.home_reviews();
		slider_function.home_television();
		slider_function.home_television_img();
		slider_function.home_news();
		slider_function.home_news_img();
		slider_function.home_video();
		slider_function.single_video_related();
		slider_function.service_review();
	},
	service_review: function() {
		var list_slide=jQuery('.list-reviews2'),
			item=jQuery('.list-reviews2 .box-img');
		console.log(list_slide)
		if(list_slide.length>0&&item.length>3) {
			list_slide.slick({
				dots: false,
				arrow: true,
				speed: 1000,
				//autoplay: true,
				autoplaySpeed: 3000,
				slidesToShow: 3,
				slidesToScroll: 3,
				responsive: [
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: true,
							dots: false,
							centerMode: false,
							arrows: true,
						},
					},
				],
			});
		} else {
			list_slide.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				mobileFirst: true,
				arrows: true,
				dots: false,
				responsive: [
					{
						breakpoint: 575,
						settings: "unslick",
					},
				],
			});
		}
	},
	single_video_related: function() {
		var list_slide=jQuery('.video-related'),
			item=jQuery('.video-related .post-video');
		if(list_slide.length>0&&item.length>3) {
			list_slide.slick({
				dots: false,
				arrow: true,
				speed: 1000,
				//autoplay: true,
				autoplaySpeed: 3000,
				slidesToShow: 3,
				slidesToScroll: 3,
				responsive: [
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							infinite: true,
							dots: false,
							centerMode: false,
							arrows: true,
						},
					},
				],
			});
		} else {
			list_slide.slick({
				slidesToShow: 2,
				slidesToScroll: 2,
				mobileFirst: true,
				arrows: true,
				dots: false,
				responsive: [
					{
						breakpoint: 575,
						settings: "unslick",
					},
				],
			});
		}
	},
	home_video: function() {
		var list_slide=jQuery('.list-video'),
			item=jQuery('.list-video .inner-video');
		if(list_slide.length>0&&item.length>4) {
			list_slide.slick({
				dots: false,
				arrow: true,
				speed: 1000,
				//autoplay: true,
				autoplaySpeed: 3000,
				slidesToShow: 4,
				slidesToScroll: 4,
				responsive: [
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							infinite: true,
							dots: false,
							centerMode: false,
							arrows: true,
						},
					},
				],
			});
		} else {
			list_slide.slick({
				slidesToShow: 2,
				slidesToScroll: 2,
				mobileFirst: true,
				arrows: true,
				dots: false,
				responsive: [
					{
						breakpoint: 575,
						settings: "unslick",
					},
				],
			});
		}
	},
	home_reviews: function() {
		var list_slide=jQuery('.list-reviews'),
			item=jQuery('.list-reviews .item');
		if(list_slide.length>0&&item.length>1) {
			list_slide.slick({
				dots: false,
				arrow: true,
				speed: 1000,
				//autoplay: true,
				autoplaySpeed: 3000,
				slidesToShow: 1,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: true,
							dots: false,
							centerMode: false,
							arrows: false,
						},
					},
				],
			});
		} else {
			list_slide.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				mobileFirst: true,
				arrows: false,
				dots: false,
				responsive: [
					{
						breakpoint: 575,
						settings: "unslick",
					},
				],
			});
		}
	},
	home_television_img: function() {
		var list_slide=jQuery('.television-img'),
			item=jQuery('.television-img .inner');
		if(list_slide.length>0&&item.length>1) {
			list_slide.slick({
				dots: false,
				arrow: false,
				speed: 1000,
				//autoplay: true,
				autoplaySpeed: 3000,
				slidesToShow: 1,
				slidesToScroll: 1,
				asNavFor: '.television-logo',
				responsive: [
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: true,
							dots: false,
							centerMode: false,
							arrows: false,
						},
					},
				],
			});
		}
	},
	home_television: function() {
		var list_slide=jQuery('.television-logo'),
			item=jQuery('.television-logo .inner');
		if(list_slide.length>0&&item.length>1) {
			list_slide.slick({
				dots: false,
				arrow: false,
				speed: 1000,
				//autoplay: true,
				autoplaySpeed: 3000,
				slidesToShow: 3,
				slidesToScroll: 1,
				asNavFor: '.television-img',
				focusOnSelect: true,
				responsive: [
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 1.5,
							slidesToScroll: 1,
							infinite: true,
							dots: false,
							centerMode: false,
							arrows: false,
						},
					},
				],
			});
		}
	},
	home_news_img: function() {
		var list_slide=jQuery('.news-img'),
			item=jQuery('.news-img .inner');
		if(list_slide.length>0&&item.length>1) {
			list_slide.slick({
				dots: false,
				arrow: false,
				speed: 1000,
				//autoplay: true,
				autoplaySpeed: 3000,
				slidesToShow: 1,
				slidesToScroll: 1,
				focusOnSelect: true,
				asNavFor: '.news-logo',
				responsive: [
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: true,
							dots: false,
							centerMode: false,
							arrows: false,
						},
					},
				],
			});
		}
	},
	home_news: function() {
		var list_slide=jQuery('.news-logo'),
			item=jQuery('.news-logo .inner');
		if(list_slide.length>0&&item.length>1) {
			list_slide.slick({
				dots: false,
				arrow: false,
				speed: 1000,
				//autoplay: true,
				autoplaySpeed: 3000,
				slidesToShow: 3,
				slidesToScroll: 1,
				asNavFor: '.news-img',
				focusOnSelect: true,
				responsive: [
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 2.5,
							slidesToScroll: 1,
							infinite: true,
							dots: false,
							centerMode: false,
							arrows: false,
						},
					},
				],
			});
		}
	},
}
jQuery(document).ready(function() {
	global_function.init();
	slider_function.init();
});

document.querySelectorAll('.box-status-entry').forEach(function(box) {

	const fullText=box.innerText.trim();
	const limit=200;

	if(fullText.length<=limit) return;

	const shortText=fullText.substring(0,limit)+"...";

	box.innerHTML=`
        <div class="content-text">${shortText}</div>
        <span class="readmore-toggle">Xem thêm</span>
    `;

	const toggleBtn=box.querySelector(".readmore-toggle");
	const textSpan=box.querySelector(".content-text");

	let expanded=false;

	toggleBtn.addEventListener("click",function() {
		expanded=!expanded;

		if(expanded) {
			textSpan.innerText=fullText;
			toggleBtn.innerText="Thu gọn";
		} else {
			textSpan.innerText=shortText;
			toggleBtn.innerText="Xem thêm";
		}
	});

});