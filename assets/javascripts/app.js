$(document).ready(function() {

  // Primary Links
	$('.primary-links ul li').hover(function() {
	  $(this).children('ul').addClass('dropdown-show');
	}, function() {
	  $(this).children('ul').removeClass('dropdown-show');
	});
	
	// Sidebar Navigation
	if ($('.sidebar nav ul li').length > 0) {
	} else { $('.sidebar nav').hide();
	}
	
	
	// Site-specific
	$('.home-standard .page-main').before('<div class="bottle"></div>')

});