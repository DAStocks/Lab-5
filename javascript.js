var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGFzMjY0IiwiYSI6ImNrdXl4NXpxYTc3Mmsyd3E2ZDZ6bm55b3cifQ.o7GVvvktEJvo_MAGbb8MCw'
});


var satellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/satellite-v9',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiZGFzMjY0IiwiYSI6ImNrdXl4NXpxYTc3Mmsyd3E2ZDZ6bm55b3cifQ.o7GVvvktEJvo_MAGbb8MCw'
});


var mine = L.layerGroup(mine);

          var mAustralia = L.marker([-25.27, 133.77]).bindPopup('Australia' + "<br>" + "40,000 metric tons").addTo(mine);

          var mChile = L.marker([-38.54,-71.67]).bindPopup('Chile' + "<br>" + "18,000 metric tons").addTo(mine);

          var mBrazil = L.marker([-15.54,-45.67]).bindPopup('Brazil' + "<br>" + "1,900 metric tons").addTo(mine);

          var mZimbabwe = L.marker([-18.54,30.67]).bindPopup('Zimbabwe' + "<br>" + "1,600 metric tons").addTo(mine);

          var mPortugal = L.marker([38.54,-8.5]).bindPopup('Portugal' + "<br>" + "1,200 metric tons").addTo(mine);

          var mArgentina = L.marker([-38.4161,-63.6167]).bindPopup('Argentina' + "<br>" + "6,400 metric tons").addTo(mine);

          var mChina = L.marker([35.54,104.67]).bindPopup('China' + "<br>" + "7,500 metric tons").addTo(mine);

var reserves = L.layerGroup(reserves);

        var rAustralia = L.marker([-25.27, 133.77]).bindPopup('Australia' + "<br>" + "4,700,000 tons").addTo(reserves);

        var rChile = L.marker([-38.54,-71.67]).bindPopup('Chile' + "<br>" + "9,200,000 metric tons").addTo(reserves);

        var rBrazil = L.marker([-15.54,-45.67]).bindPopup('Brazil' + "<br>" + "95,000 metric tons").addTo(reserves);

        var rZimbabwe = L.marker([-18.54,30.67]).bindPopup('Zimbabwe' + "<br>" + "220,000 metric tons").addTo(reserves);

        var rPortugal = L.marker([38.54,-8.5]).bindPopup('Portugal' + "<br>" + "60,000 metric tons").addTo(reserves);

        var rArgentina = L.marker([-38.4161,-63.6167]).bindPopup('Argentina' + "<br>" + "1,900,000 metric tons").addTo(reserves);

        var rChina = L.marker([35.54,104.67]).bindPopup('China' + "<br>" + "1,500,000 metric tons").addTo(reserves);

        var rUsa = L.marker ([37.0902, -95.7129]).bindPopup("United States" + "<br>" + "750,000 metric tons").addTo(reserves);



var baseLayers = {
  'Streets': streets,
  'Satellite': satellite
};

var overlays = {
  'Lithium Mines': mine,
  'Lithium Reserves': reserves
};

var map = L.map('map', {
          center: [0,0],
          zoom: 1,
          layers: [streets, mine]
        });

var layerControl = L.control.layers(baseLayers, overlays).addTo(map);

L.geoJSON(producers).addTo(map);


var map2 = L.map('map2', {
   center:[37.7672,-117.5833],
   zoom: 14,
   });

var satellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/satellite-v9',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiZGFzMjY0IiwiYSI6ImNrdXl4NXpxYTc3Mmsyd3E2ZDZ6bm55b3cifQ.o7GVvvktEJvo_MAGbb8MCw'
}).addTo(map2);

L.geoJSON(silverPeak).addTo(map2);
