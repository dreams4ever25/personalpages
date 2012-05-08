$("document").ready(function() {
	$('.top-title').click(function(){
	   	$('html, body').animate({
	       	scrollTop: $(".middle").offset().top
	   	}, 2000);
	});

	$('.middle-title').click(function(){
	    $('html, body').animate({
	        scrollTop: $(".bottom").offset().top
	    }, 2000);
	 });

	$('.bottom-title').click(function(){
	    $('html, body').animate({
	        scrollTop: $(".top").offset().top
	    }, 2000);
	 });
 
});
