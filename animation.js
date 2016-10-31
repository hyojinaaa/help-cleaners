$(document).ready(function(){

	$(window).scroll(function(){

		var scrollPosition = $(window).scrollTop();
		var help1 = $('#help1');
		var help2 = $('#help2');
		var help3 = $('#help3');
		var help4 = $('#help4');
		var help5 = $('#help5');

		    
 
			if( scrollPosition > 100 ) {
				help1.slideDown();
			} else {
				help1.hide();
			}

			if( scrollPosition > 800 ) {
				help2.slideDown();
			} else {
				help2.hide();
			}

			if( scrollPosition > 1500 ) {
				help3.slideDown();
			} else {
				help3.hide();
			}

			if( scrollPosition > 2200 ) {
				help4.slideDown();
			} else {
				help4.hide();
			}


			if( scrollPosition > 2900 ) {
				help5.slideDown();
			} else {
				help5.hide();
			}

		


	});

	
	$('.play1').click(function(){
		$('#video1').get(0).play();
		$('.play1').hide();
		$('.pause1').show();
	});

	$('.pause1').click(function(){
		$('#video1').get(0).pause();
		$('.play1').show();
		$('.pause1').hide();
	});

	$('.play2').click(function(){
		$('#video2').get(0).play();
		$('.play2').hide();
		$('.pause2').show();
	});

	$('.pause2').click(function(){
		$('#video2').get(0).pause();
		$('.play2').show();
		$('.pause2').hide();
	});

	$('.play3').click(function(){
		$('#video3').get(0).play();
		$('.play3').hide();
		$('.pause3').show();
	});

	$('.pause3').click(function(){
		$('#video3').get(0).pause();
		$('.play3').show();
		$('.pause3').hide();
	});

	$('.play4').click(function(){
		$('#video4').get(0).play();
		$('.play4').hide();
		$('.pause4').show();
	});

	$('.pause4').click(function(){
		$('#video4').get(0).pause();
		$('.play4').show();
		$('.pause4').hide();
	});

	$('.play5').click(function(){
		$('#video5').get(0).play();
		$('.play5').hide();
		$('.pause5').show();
	});

	$('.pause5').click(function(){
		$('#video5').get(0).pause();
		$('.play5').show();
		$('.pause5').hide();
	});


	


});





