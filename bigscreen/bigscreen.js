(function(){
	// Create the map
	L.mapbox.accessToken = 'pk.eyJ1IjoicmRlYmVhc2kiLCJhIjoiTzFsZFh5dyJ9.aL85_HXsvHRTA7OV4pMM9g';
	var map = L.mapbox.map('mapArea', 'rdebeasi.m17nbn33');

	var myLayer = L.mapbox.featureLayer().addTo(map);

	// Listen for firebase data
	var myDataRef = new Firebase('https://amber-inferno-2234.firebaseio.com/');
	myDataRef.on('child_added', function(snapshot) {
		var journey = snapshot.val();
		console.log(journey);

		var geojson = 

{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates":
          [
			      [journey.origin.longitude, journey.origin.latitude],
			      [journey.destination.longitude, journey.destination.latitude],
			    ]
      },
      "properties": {
        "stroke": "#aac",
        "stroke-opacity": .6,
        "stroke-width": 2
      }
    }
  ]
}

console.log([
			      [journey.origin.latitude, journey.origin.longitude],
			      [journey.destination.latitude, journey.destination.longitude],
			    ]);


		// We probably shouldn't create a new layer for every line
		var myLayer = L.mapbox.featureLayer().addTo(map);
		myLayer.setGeoJSON(geojson);
		console.log([
			      [journey.origin.latitude, journey.origin.longitude],
			      [journey.destination.latitude, journey.destination.longitude]
			    ]);
    });
})();