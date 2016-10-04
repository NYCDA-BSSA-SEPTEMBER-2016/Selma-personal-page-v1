
//Tekst zichtbaar maken in het portfolio.
$("div #portf1tekst").hide();
$("div #portf2tekst").hide();
$("div #portf3tekst").hide();

$("#portf1").click(function(){
	$("#portf1tekst").fadeIn(1000);
});

$("#portf2").click(function(){
	$("#portf2tekst").fadeIn(1000);
});

$("#portf3").click(function(){
	$("#portf3tekst").fadeIn(1000);
});


$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
})




$("#imgSelma").fadeOut( 5000 )
$("#imgSelma").fadeIn( 5000 )

$(".rotating").textrotator({
  animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
  separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
  speed: 2000 // How many milliseconds until the next word show.
});

// Contact: map
 function initMap() {
        var bssa = {lat: 52.341093, lng: 4.82315496};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: bssa
        });
        var marker = new google.maps.Marker({
          position: bssa,
          map: map
        });
      }
