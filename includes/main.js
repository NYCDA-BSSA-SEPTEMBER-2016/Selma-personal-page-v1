

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



// function myMap() {
//   var mapCanvas = document.getElementById("map");
//   var mapOptions = {
//     center: new google.maps.LatLng(52.341093, 4.82315496), zoom: 15
//   };
//   var map = new google.maps.Map(mapCanvas, mapOptions);
//           var marker = new google.maps.Marker({
//           position: uluru,
//           map: map
//         });
// }