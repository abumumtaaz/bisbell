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


//slider

				var tpj=jQuery;
				var revapi22;
				tpj(document).ready(function() {
					if(tpj("#rev_slider_22_1").revolution == undefined){
						revslider_showDoubleJqueryError("#rev_slider_22_1");
					}else{
						revapi22 = tpj("#rev_slider_22_1").show().revolution({
							sliderType:"standard",
							jsFileLocation:"revolution/js/",
							sliderLayout:"fullscreen",
							dottedOverlay:"none",
							delay:20000,
							particles: {startSlide: "first", endSlide: "last", zIndex: "3",
								particles: {
									number: {value: 100}, color: {value: "#ffffff"},
									shape: {
										type: "circle", stroke: {width: 0, color: "#ffffff", opacity: 1},
										image: {src: ""}
									},
									opacity: {value: 1, random: true, min: 0.5, anim: {enable: true, speed: 1, opacity_min: 0, sync: false}},
									size: {value: 1, random: true, min: 0.5, anim: {enable: true, speed: 1, size_min: 1, sync: false}},
									line_linked: {enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1},
									move: {enable: true, speed: 6, direction: "none", random: false, min_speed: 3, straight: true, out_mode: "out"}},
								interactivity: {
									events: {onhover: {enable: false, mode: "bubble"}, onclick: {enable: false, mode: "repulse"}},
									modes: {grab: {distance: 400, line_linked: {opacity: 0.5}}, bubble: {distance: 200, size: 0, opacity: 0.01}, repulse: {distance: 200}}
								}
							},
							responsiveLevels:[1240,1024,778,480],
							visibilityLevels:[1240,1024,778,480],
							gridwidth:[1240,1024,778,480],
							gridheight:[868,768,960,720],
							lazyType:"single",
							parallax: {
								type:"mouse",
								origo:"slidercenter",
								speed:1000,
								levels:[1,2,3,4,5,6,7,8,9,10,47,48,49,50,51,55],
							},
							shadow:0,
							spinner:"off",
							stopLoop:"off",
							stopAfterLoops:-1,
							stopAtSlide:-1,
							shuffle:"off",
							autoHeight:"off",
							fullScreenAutoWidth:"off",
							fullScreenAlignForce:"off",
							fullScreenOffsetContainer: "",
							fullScreenOffset: "",
							disableProgressBar:"on",
							hideThumbsOnMobile:"on",
							hideSliderAtLimit:0,
							hideCaptionAtLimit:0,
							hideAllCaptionAtLilmit:0,
							debugMode:false,
							fallbacks: {
								simplifyAll:"off",
								nextSlideOnWindowFocus:"off",
								disableFocusListener:false,
							}
						});
					}

					RsParticlesAddOn(revapi22);
				});	/*ready*/


	
 })(jQuery);// End of use strict