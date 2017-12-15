console.log("hello!")

//google map

function initMap() {
    var location = { lat: 47.549615, lng: -122.277360 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}