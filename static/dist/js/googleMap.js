function initMap() {
    let ncku = { lat: 22.9962419, lng: 120.2151219 };
    let map = new google.maps.Map( document.getElementById( 'map' ), {
        zoom: 15,
        center: ncku
    } );
    let marker = new google.maps.Marker( {
        position: ncku,
        map: map
    } );
}
