function initMap() {
    let ncku = { lat: 22.9971973, lng: 120.2188129 };
    let map = new google.maps.Map( document.getElementById( 'map' ), {
        zoom: 15,
        center: ncku
    } );
    let marker = new google.maps.Marker( {
        position: ncku,
        map: map
    } );
}
