//smooth scrolling
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


//rotating text
$(".rotating").textrotator({
  animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
  separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
  speed: 2000 // How many milliseconds until the next word show.
});


//Tekst zichtbaar maken in het portfolio.
$("div #portf1tekst").hide();
$("div #portf2tekst").hide();
$("div #portf3tekst").hide();
$("div #portf4tekst").hide();
$("div #portf5tekst").hide();
$("div #portf6tekst").hide();


// I'm sorry Paul! I tried so many times and so many different ways and so many google sessions, but I simply couldn't get it to work! I choose to only make it show when clicked on and not fade out again, because it would change the feel of the webpage later on.
// var button = false
// $("#portf1").click(function(){
// 	if (button.onclick) {
// 		button = false;
// 		$("#portf1tekst").fadeOut(1000)
// 	} else {
// 		$("#portf1tekst").fadeIn(1000)
// 		button = true;
// 	}
// });

$("#portf1").click(function(){
	$("#portf1tekst").fadeOut(10000);
});

$("#portf2").click(function(){
	$("#portf2tekst").fadeIn(1000);
});

$("#portf3").click(function(){
	$("#portf3tekst").fadeIn(1000);
});

$("#portf4").click(function(){
	$("#portf4tekst").fadeIn(1000);
});

$("#portf5").click(function(){
	$("#portf5tekst").fadeIn(1000);
});

$("#portf6").click(function(){
	$("#portf6tekst").fadeIn(1000);
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
