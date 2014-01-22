// Use ECMAScript 5 Strict Mode
"use strict";

// Set the require.js configuration for your application.
var require = {
	baseUrl: "./",

  paths: {
    "libs": "bower_components",
    "xnCarousel": "js/jquery.xnCarousel",
    "jquery": "js/jquery",
    "less": "js/less-1.5.0.min",
    "xnDualCarousel" : "js/jquery.xteam.dual_carousel.min"
  },

  shim: {
		 xnDualCarousel: {
			 deps: ['jquery'],
			 exports: 'jQuery.fn.xnDualCarousel'
		 },
     less : {
        exports : "less"
     }
	}

}