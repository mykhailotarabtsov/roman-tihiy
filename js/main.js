$(document).ready(function() {
	$("#my-menu").mmenu({
		"extensions": [
			"pagedim-black",
			"position-front",
			"border-none"
		 ],
		 "navbar": {
			 "title": '<img src="./img/Logo.png" alt="roman tihiy" class="img-fluid" style="width: 80px">'
		 },
		 "backButton": {
				close: true
	 }
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:start', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

	$(".my-button").click(function() {
			api.close();
	});

	// Masonry Layouts
	$('.grid').masonry({
		// options
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		// percentPosition: true,
		// gutter: 20
	});

	// AJAX page load

	// load index page when the page loads
	$("#ajax-content").hide().load("home.html").fadeIn(600);
	$("#home").click(function () {
		// load home page on click
		$("#ajax-content").hide().load("home.html").fadeIn(600);
		api.close();
		$('.hamburger-inner').removeClass('hamburger-reverse');
	});
	$("#projects").click(function () {
			// load home page on click
			$("#ajax-content").hide().load("projects.html").fadeIn(600);
			api.close();
			$('.hamburger-inner').addClass('hamburger-reverse');
	});
	$("#about").click(function () {
			// load about page on click
			$("#ajax-content").hide().load("about.html").fadeIn(600);
			api.close();
			$('.hamburger-inner').addClass('hamburger-reverse');
	});
	$("#contact").click(function () {
			// load contact form onclick
			$("#ajax-content").hide().load("contact.html").fadeIn(600);
			api.close();
			$('.hamburger-inner').addClass('hamburger-reverse');
	});
	$("#about-project").click(function () {
			// load contact form onclick
			$("#ajax-content").hide().load("about-project.html").fadeIn(600);
	});
	$("#album").click(function () {
		// load home page on click
		$("#ajax-content").hide().load("album.html").fadeIn(600);
		api.close();
		$('.hamburger-inner').addClass('hamburger-reverse');
	});

	setTimeout(function() {
		$('.my__preloader').css('display', 'none');
	}, 1300)
	
	
});
var currentSlideMy = 0;
$(document).ajaxComplete(function() {
	
	$(".album__buttonSlide").click(function (event) {
		currentSlideMy = +(event.target.getAttribute('data-slideNumber') - 1);
		console.log(currentSlideMy);
		$("#ajax-content").hide().load("slide.html").fadeIn(600);
	});
	console.log(currentSlideMy);

	$(".slide__project-slide").on("init", function(event, slick){
		$(".count").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
	});

	$(".slide__project-slide").on("afterChange", function(event, slick, currentSlide){
		$(".count").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
	});

	$('.slide__project-slide').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		prevArrow: '.my-prev__arrow',
		nextArrow: '.my-next__arrow',
		initialSlide: currentSlideMy
	});
	$("#about-project").click(function () {
		// load contact form onclick
		$("#ajax-content").hide().load("about-project.html").fadeIn(600);
	});
});
