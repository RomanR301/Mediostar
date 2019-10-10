var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [30.4811, 50.3924]
    },
    properties: {
      title: 'Mapbox',
      description: 'Washington, D.C.'
    }
  }]
};

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9tYW5yMzAxIiwiYSI6ImNrMWtpeHlrdDAweTgzb3FwMjFhY3RjNWgifQ.jzkvJ5YKQhLgh7bXF0U_Tg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/romanr301/ck1gcg1jn04q01cqpw3b5b692',
  center: [30.481, 50.3923],
  zoom: 16.4
});
geojson.features.forEach(function(marker) {

// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'marker';

// make a marker for each feature and add to the map
new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .addTo(map);
});