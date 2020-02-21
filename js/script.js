jQuery(document).ready(function($){
	$(window).scroll(function() {
		if ($(this).scrollTop()>50){
			$('.header').addClass('scroll');

		}else{
			$('.header').removeClass('scroll');

		}
	});

	$("#banner").slick({
		dots: true,
		infinite: true,
		autoplay:true,
		speed: 1000,
	});
	$("#liturgy-one").slick({
		dots: false,
		infinite: true,
		autoplay:true,
		speed: 1000,
	});
	$("#liturgy-two").slick({
		dots: false,
		infinite: true,
		autoplay:true,
		speed: 1000,
	});
	

	$("#hightlight").slick({
		dots: true,
		autoplay: false,
		fade: true,
		autoplaySpeed: 5000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.top-service',

	});

	$('.top-service').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		pauseOnHover: false,
		asNavFor: '#hightlight',
		focusOnSelect: true,
		/*responsive: [{
			breakpoint: 992,
			settings: "unslick"
		}, ]*/
	});
	$('#carousel').slick({
		infinite: true,
		dots:false,
		slidesToShow: 3,
		slidesToScroll: 3,
		 
	});
	$('#board-member').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		
		]
	});
	$('#staff-member').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		
		]
	});
	
	

	//$('#category').selectpicker();

	// Equalheight
	/* Thanks to CSS Tricks for pointing out this bit of jQuery
http://css-tricks.com/equal-height-blocks-in-rows/
It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */

equalheight = function(container){

	var currentTallest = 0,
	currentRowStart = 0,
	rowDivs = new Array(),
	$el,
	topPosition = 0;
	$(container).each(function() {

		$el = $(this);
		$($el).height('auto')
		topPostion = $el.position().top;

		if (currentRowStart != topPostion) {
			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
 } else {
 	rowDivs.push($el);
 	currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
 }
 for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
 	rowDivs[currentDiv].height(currentTallest);
 }
});
}

$(window).load(function() {
	equalheight('.equalheight');
});


$(window).resize(function(){
	equalheight('.equalheight');
});









});