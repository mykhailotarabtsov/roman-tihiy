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
  	percentPosition: true
	});

	// AJAX page load

	// load index page when the page loads
	$("#ajax-content").hide().load("home.html").fadeIn('slow');
	$("#home").click(function () {
		// load home page on click
		$("#ajax-content").hide().load("home.html").fadeIn('slow');
		api.close();
		$('.hamburger-inner').removeClass('hamburger-reverse');
	});
	$("#projects").click(function () {
			// load home page on click
			$("#ajax-content").hide().load("projects.html").fadeIn('slow');
			api.close();
			$('.hamburger-inner').addClass('hamburger-reverse');
	});
	$("#about").click(function () {
			// load about page on click
			$("#ajax-content").hide().html("<h1>Page 2</h1><p>Page 2 has been loaded</p>").fadeIn('slow');
			api.close();
	});
	$("#contact").click(function () {
			// load contact form onclick
			$("#ajax-content").hide().html("<h1>Page 3</h1><p>Page 3 has been loaded</p>").fadeIn('slow');
			api.close();
	});
	$("#about-project").click(function () {
			// load contact form onclick
			$("#ajax-content").hide().load("about-project.html").fadeIn('slow');
	});
	$("#album").click(function () {
		// load home page on click
		$("#ajax-content").hide().load("album.html").fadeIn('slow');
		api.close();
		$('.hamburger-inner').addClass('hamburger-reverse');
	});

	
});