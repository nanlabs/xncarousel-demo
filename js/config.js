// Use ECMAScript 5 Strict Mode
"use strict";

// Define jQuery as AMD module
define.amd.jQuery = true;

// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file
  deps: ["main"],

  paths: {

    libs: "../../../libs",
    xnCarousel: "js/jquery.xnCarousel",
    // Libraries
    jquery: "js/jquery"
   
  }


});