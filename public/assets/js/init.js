new WOW().init();
function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(-37.817283, 144.955763),
        zoom: 15,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
    };

    var map = new google.maps.Map(document.getElementById('map'),
        mapOptions);

    var marker = new google.maps.Marker({
        map: map,
        position: map.getCenter()
    });
    var infowindow = new google.maps.InfoWindow();
    infowindow.setContent('<img src="assets/images/map.png" alt="image" />');
    google.maps.event.addListener(marker, 'load', function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}

// google.maps.event.addDomListener(window, 'load', initialize);
