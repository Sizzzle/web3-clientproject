// JavaScript Document


// Draw-in Animation


	var $svg = $('svg').drawsvg({
			  duration: 3000,
			  easing: 'linear'
		});
		
    	$svg.drawsvg('animate');


		



   
	




		










// Over 21 Modal
$(document).ready(function(){

$('#modalclose').click(function(){
    $('.modal-container').hide();
  });

 if(localStorage.getItem('popState') != 'shown'){
        $(".modal-container").addClass('modal-animation');
        localStorage.setItem('popState','shown');
    }
    
// Hidden Mobile Navigation
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


