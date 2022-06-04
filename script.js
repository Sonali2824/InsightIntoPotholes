mapboxgl.accessToken =
  "pk.eyJ1Ijoic29uYWxpLTEwOSIsImEiOiJjbDNmeXJiMWQwM215M2pxdTFvajcwNzRyIn0.2QMd9gIP8h9VA1-9Sq33-w"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15
});

 const potholes=[[77.6519,12.97123],
 [77.65207,12.97127],
 [77.65218,12.97125],
 [-122.083,37.4213],
 [-122.184,37.4219],
 [-122.14,37.4218983],
 [-122.1434,37.4239809],
 [-122.12,37.42187],
[77.69212,12.93372],
[77.70154,12.95695],
[77.680254,12.954730],
[77.689867,12.955901],
[77.699309,12.951217],
[77.697935,12.943856],
[77.658453,12.967946],
[77.663603,12.963095]]

potholes.map((element)=>{
  var popup = new mapboxgl.Popup()
  .setHTML(
    `<h3>Pothole</h3><h4>Longitude= ${element[1]}</h4><h4>Latitude= ${element[0]}</h4>`
  )
  .addTo(map);
  let marker = new mapboxgl
  .Marker({ color: 'red' })
    .setLngLat( element)
    .addTo(map)
    .setPopup(popup);  
    
})

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })
  map.addControl(directions, "top-left")
}

