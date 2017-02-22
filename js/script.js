// JavaScript Document


// Draw-in Animation
var $svg = $('svg').drawsvg({
      duration: 5000,
      easing: 'linear'
    });

$svg.drawsvg('animate');



// Hidden Mobile Navigation
$(document).ready(function(){
	$('.mobile-nav-btn').click(function(e){
		$('.mobile-nav').slideToggle();
		// this prevents the browser from doing the default link action
		e.preventDefault();
	});
	var $window = $(window);
	  $window.on('resize', function (){
        if ($window.width() > 800)
        {
            $('.mobile-nav').hide();
        }
    });
});

