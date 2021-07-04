$(document).ready(function(){

           //*************************
    // Add smooth scrolling to all links
      //************************
    
  
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
   
        if (this.hash !== "") {
     
         // Prevent default anchor click behavior
      
          event.preventDefault();

            // Store hash
     
            var hash = this.hash;

       //  Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      
            $('html, body').animate({
       
                scrollTop: $(hash).offset().top
    
            }, 2000, function(){
   
       
            // Add hash (#) to URL when done scrolling (default click behavior)
       
            window.location.hash = hash;
     
        });
    
        } // End if

    });
    
       //*************************
       // Add smooth scrolling to all links
      //************************

      //*************************
      // NavigationaBar rezise
      //************************
 $(document).on("scroll", function() {

	if($(document).scrollTop()>300) {
		$("#navigation").removeClass("large").addClass("small");
	} else {
		$("#navigation").removeClass("small").addClass("large");
	}
	
});
      //*************************
      //  end NavigationaBar rezise
      //************************


  
     //*************************
      // countTo
      //************************   
 $('.counttodata').countTo();

      //*************************
      // countTo
      //************************
      
      
      
      //*************************
      // scrollToTop 
      //************************
 
 
 $(window).scroll(function () {
  if ($(window).scrollTop() > 400) {        
            $("#UpButton").fadeIn(200);
        } else {
            $("#UpButton").fadeOut(200);
        }
    });
    $("#UpButton").click(function () {
        $("html, body").stop().animate({scrollTop: 0}, 1500, "easeInOutExpo");
    });
    
      //*************************
      // scrollToTop
      //************************



});
