/*-----------------------------------------------------------------------------------

    Template Name: Rana portfolio html template
    Template URI: http://themefair.com
    Description: This is html5 template
    Author: theme-fair
    Author URI: http://theme-fair.com
    Version: 1.0

-----------------------------------------------------------------------------------*/


(function ($) {
 "use strict";

/*--- wow js active
------------------------------ */
   new WOW().init();
       
    
/*---  jQuery MeanMenu
-------------------*/
jQuery('nav#dropdown').meanmenu();  
    
/*--- Stick header
------------------------------ */  

    $(window).on('scroll',function() {    
       var scroll = $(window).scrollTop();
       if (scroll < 50) {
        $(".stick-header").removeClass("stick");
       }else{
        $(".stick-header").addClass("stick");
       }
    });

/*--- One Page Menu
-----------------------------------*/
    var TopOffsetId = $('.header-area-inner, .mean-nav ul li a, .smoth-scroll').height() - -50;
    $('.mainmenu nav').onePageNav({
        currentClass: 'active',
        scrollThreshold: 0.3,
        scrollSpeed: 3000,
        scrollOffset: TopOffsetId,
    });
    
/*--  Smooth Scroll
-----------------------------------*/
    $('.mainmenu nav ul li a, .mean-nav ul li a, .smoth-scroll').on('click', function(e) {
        e.preventDefault();
        var link = this;
        $.smoothScroll({
          offset: -70,
          scrollTarget: link.hash
        });
    });
    
/*---  Isotope active JS
-----------------------------*/
$('.grid').imagesLoaded( function() {
	
    // filter items on button click
    $('.portfolio-menu').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });	

    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-item',
      }
    });

});
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});
    
/*--- Magnific Popup
------------------------*/
    $('.img-poppu').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
    }
});    
 /* magnificPopup video popup */
    $('.video-play').magnificPopup({
        type: 'iframe'
    });
 

/*--- owl active
------------------------------ */    
$('.slider-active').owlCarousel({
    loop:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay:true,
    autoplayTimeout:5000,
    items:1,
    dots:false,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
}) 

/*--- owl active
------------------------------ */    
$('.testimonel-carousel').owlCarousel({
    loop:true,
    items:1,
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    nav:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
})   

/*--- video active 
------------------------*/
    $(".youtube-bg").YTPlayer({
        videoURL:"https://youtu.be/uFN1FDxuUIw",
        containment:'.youtube-bg',
        mute:true,
        loop:true,
        showControls: false
        
    });
  
/*--- Loader activation here. 
-------------------------------*/
    $("#fakeLoader").fakeLoader({
        timeToHide:1500, 
        zIndex:9999, 
        spinner:"spinner1",
        bgColor:"#333",
    });

    setTimeout(function(){ $('#home').fadeIn('fast', function() { initialize(); } ); }, 1500);   
    
/*---  scrollUp
---------------------------- */	
$.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
}); 	 
    
   


    
})(jQuery); 