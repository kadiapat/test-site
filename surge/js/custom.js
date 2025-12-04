/* Zipcode Character Function */			
function numbersonly(e, decimal) {
			var key;
			var keychar;
			if (window.event) {key = window.event.keyCode;}
			else if (e) {key = e.which;}
			else {return true;}
			keychar = String.fromCharCode(key);
			if ((key==null) || (key==0) || (key==8) ||  (key==9) || (key==13) || (key==27) ) {return true;}
			else if ((("0123456789").indexOf(keychar) > -1)) {return true;}
			else if (decimal && (keychar == ".")) {return true;}
			else return false; }

//carieer logos scrolling //
$(document).ready(function() {
     $("#logoslider").flexisel({
        visibleItems: 6,
        animationSpeed: 1000,
        autoPlay: true,
        autoPlaySpeed: 3000,            
        pauseOnHover: false,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 2
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 2
            },
            tablet: { 
                changePoint:992,
                visibleItems: 4
            },
			tabland: { 
                changePoint:1199,
                visibleItems: 5
            }
        }
    });
});

/* mobile menu toggle effect */
$('.navbar-toggle').click(function() {
  $('.navbar-toggle').toggleClass("nav-bg").toggleClass("pad");
  $('.navbar').toggleClass("nav-bg").toggleClass("pad");
});
/* place holder function */
$(document).ready(function() {
       var holder = 'Zip Code';
       $('.zip').blur(function(){
        if ($(this).val().length == 0)
          $(this).val(holder).addClass('holder');
       }).focus(function(){
        if ($(this).val() == holder)
          $(this).val('').removeClass('holder');
       }).val(holder).addClass('holder');
      });


// Equal LOB box Height
(function($){
	function fixButtonHeights() {
		var heights = new Array();
		$('.lob-row-content').each(function() {	
			$(this).css('min-height', '0');
			$(this).css('max-height', 'none');
			$(this).css('height', 'auto');
	 		heights.push($(this).height());
		});

		var max = Math.max.apply( Math, heights );
		$('.lob-row-content').each(function() {
			$(this).css('height', max + 'px');
		});	
	}

	$(window).load(function() {
		fixButtonHeights();
		$(window).resize(function() {
			setTimeout(function() {
	      		fixButtonHeights();
			}, 120);
		});
	});
})(jQuery);
// Equal LOB box Height
(function($){
	function fixButtonHeights() {
		var heights = new Array();
		$('.lob-row-title').each(function() {	
			$(this).css('min-height', '0');
			$(this).css('max-height', 'none');
			$(this).css('height', 'auto');
	 		heights.push($(this).height());
		});

		var max = Math.max.apply( Math, heights );
		$('.lob-row-title').each(function() {
			$(this).css('height', max + 'px');
		});	
	}

	$(window).load(function() {
		fixButtonHeights();
		$(window).resize(function() {
			setTimeout(function() {
	      		fixButtonHeights();
			}, 120);
		});
	});
})(jQuery);