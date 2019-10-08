var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [24.00995, 49.83960]
    },
    properties: {
      title: 'Mapbox',
      description: 'Washington, D.C.'
    }
  }]
};

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9tYW5yMzAxIiwiYSI6ImNrMWdiNHRzNDBsdDMzY3FsazczZ3NvcXkifQ.RbhqVO194w3peff7hCWzwA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/romanr301/ck1gcg1jn04q01cqpw3b5b692',
  center: [24.0099, 49.8397],
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