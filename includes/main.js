
$("div #portf1tekst").hide();

$("#portf1").click(function(){
	$("#portf1tekst").fadeIn(1000);
});
$("#portf1").click(function(){
	$("#portf1tekst").fadeOut(1000);
});


$("#imgSelma").fadeOut( 5000 )
$("#imgSelma").fadeIn( 5000 )

// Contact: map
function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(52.341093, 4.82315496), zoom: 15
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}