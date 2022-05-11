var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGFzMjY0IiwiYSI6ImNremYwMWQ5cjNkMncyb254dWo2cmRoeHMifQ.pVEaOoZr0WG4A61Bs9f_eg'
});


var satellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/satellite-v9',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiZGFzMjY0IiwiYSI6ImNremYwMWQ5cjNkMncyb254dWo2cmRoeHMifQ.pVEaOoZr0WG4A61Bs9f_eg'
});


var mine = L.layerGroup(mine);

          var mAustralia = L.marker([-25.27, 133.77]).bindPopup('Australia' + "<br>" + "40,000 metric tons").addTo(mine);

          var mChile = L.marker([-26.233000,-69.121002]).bindPopup('Atacama Salt Flat, Chile' + "<br>" + "18,000 metric tons").addTo(mine);

          var mBrazil = L.marker([-15.54,-45.67]).bindPopup('Brazil' + "<br>" + "1,900 metric tons").addTo(mine);

          var mZimbabwe = L.marker([-18.54,30.67]).bindPopup('Zimbabwe' + "<br>" + "1,600 metric tons").addTo(mine);

          var mPortugal = L.marker([38.54,-8.5]).bindPopup('Portugal' + "<br>" + "1,200 metric tons").addTo(mine);

          var mArgentina = L.marker([-25.4242,-67.0939]).bindPopup('Salar del Hombre Muerto Salt Flats, Argentina' + "<br>" + "6,400 metric tons").addTo(mine);

          var mChina = L.marker([35.54,104.67]).bindPopup('China' + "<br>" + "7,500 metric tons").addTo(mine);

var baseLayers = {
  'Streets': streets,
  'Satellite': satellite
};

var overlays = {
  'Lithium Mines': mine,
};


var map = L.map('map', {
          center: [0,0],
          zoom: 1,
          layers: [streets, mine]
        });

var layerControl = L.control.layers(baseLayers, overlays).addTo(map);

L.geoJSON(producers, {
    style: function(feature){
      return{
        color: "#999", weight: 1, fillColor: feature.properties.fill, fillOpacity: 0.5}
      }
}).addTo(map);

L.Control.textbox = L.Control.extend({
    onAdd:function(map) {


    var text = L.DomUtil.create('div');
    text.id = "info_text";
    text.innerHTML = "<strong>Markers represent main producers. Countries with color are main reserve holders.</strong>"
    return text;
    },
    onRemove: function(map) {
    }
  });

L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
L.control.textbox({ position: 'bottomleft',}).addTo(map);


var map2 = L.map('map2', {scrollWheelZoom: false}).setView([37.7672,-117.5833], 14);

var satellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/satellite-v9',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiZGFzMjY0IiwiYSI6ImNrdXl4NXpxYTc3Mmsyd3E2ZDZ6bm55b3cifQ.o7GVvvktEJvo_MAGbb8MCw'
}).addTo(map2);

// Thracker Pass
L.easyButton( '<span class="star">&starf;</span>', function(){
  map2.setView([41.4230, -118.0343], 12);
}, 'Thracker Pass').addTo(map2);

// Silver Peak Mine
L.easyButton( '<span class="star">&para;</span>', function(){
  map2.setView([37.7672,-117.5833], 14);
},'Silver Peak Mine').addTo(map2);


var Thracker = L.marker ([41.4230, -118.0343]).bindPopup("Thracker Pass").addTo(map2);


L.geoJSON(silverPeak, {
        pointToLayer: function(feature, latlng){
            var marker = L.marker(latlng);
              marker.bindPopup("Location: Silver Peak Mine" +  "<br>Deposits: Lithium, Gold" + "<br> Year established: 1864" + "<br> Owner: Albemarle Corporation");
            return marker;
          }
        }).addTo(map2);
