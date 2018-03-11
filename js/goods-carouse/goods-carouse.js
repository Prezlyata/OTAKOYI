jQuery(document).ready(function($) {
	$("#owl-example").owlCarousel();
});

// $("body").data("page", "frontpage");


// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// 	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// 	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// 						})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

// ga('create', 'UA-41541058-1', 'owlgraphic.com');
// ga('send', 'pageview');






$(document).ready(function() {
 
	$("#owl-demo").owlCarousel({
		items : 4, //10 изображений на 1000px 
		itemsDesktop : [1000,5], //5 изображений на ширину между 1000px и 901px
		itemsDesktopSmall : [900,3], // 3 изображения между 900px и 601px
		itemsTablet: [600,2], //2 изображения между 600 и 0;
		itemsMobile : false
	});
   
  });