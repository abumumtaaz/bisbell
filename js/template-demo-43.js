//[Master Javascript]


//Template script here

(function($) {
  'use strict' ;
	
	//loading
		 
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});
	
	
// prettyPhoto
	$("a[rel^='prettyPhoto[gallery1]']").prettyPhoto();	
	
 })(jQuery);// End of use strict