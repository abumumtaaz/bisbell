//[Master Javascript]
(function($) {
	'use strict';

//Template script here
	 //loading
		 
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");
	});

	
//slider
	
	
		var tpj=jQuery;

			var revapi1069;
			tpj(document).ready(function() {
				if(tpj("#rev_slider_1069_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_1069_1");
				}else{
					revapi1069 = tpj("#rev_slider_1069_1").show().revolution({
						sliderType:"hero",
						jsFileLocation:"revolution/js/",
						sliderLayout:"fullscreen",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1240,1024,778,480],
						gridheight:[868,768,960,720],
						lazyType:"none",
						parallax: {
							type:"scroll",
							origo:"slidercenter",
							speed:1000,
							levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
							type:"scroll",
						},
						shadow:0,
						spinner:"spinner2",
						autoHeight:"off",
						fullScreenAutoWidth:"off",
						fullScreenAlignForce:"off",
						fullScreenOffsetContainer: "",
						fullScreenOffset: "",
						disableProgressBar:"on",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							disableFocusListener:false,
						}
					});
				}
			}); /*ready*/
    // prettyPhoto
  $("a[rel^='prettyPhoto[gallery1]']").prettyPhoto(); 

  //Filter  
  $(".filter-button").on('click', function(event){
    
    $(this).parent().find('.active').removeClass('active');
      $(this).addClass('active');
    
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

})(jQuery);//End of use Strict

