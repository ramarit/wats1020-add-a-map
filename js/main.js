/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

$(document).ready(function() {
  var map = L.map('map-container').setView([46.852, -121.760], 13);

  var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
  var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

  var satLayer = L.tileLayer( 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'ramarit.2pl5043m',
    accessToken: 'pk.eyJ1IjoicmFtYXJpdCIsImEiOiJjaXlrdHJ5OW0wMDFmMzJuejk1cG5xazF6In0.4GIhbUZGx1NrsXtfT-Xwag'
  });

  var drawLayer = L.tileLayer( 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    
    id: 'ramarit.2pl5j81o',
    accessToken: 'pk.eyJ1IjoicmFtYXJpdCIsImEiOiJjaXlrdHJ5OW0wMDFmMzJuejk1cG5xazF6In0.4GIhbUZGx1NrsXtfT-Xwag'
  });

  /*var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
  });*/

  var mapLayers = {
    "Satellite": satLayer,
    "Map View": drawLayer,
    "Open Street Maps": osm
  }


  L.control.layers(mapLayers).addTo(map);
  satLayer.addTo(map);

  /*var marker = L.marker([46.852, -121.760]).addTo(map);
  marker.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");*/

  var planes = [
    ["<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.",46.852, -121.760],
    ["<b>National Park Inn</b>",46.749537, -121.813369],
    ["<b>Point Success</b>", 46.845991, -121.767510],
    ["<b>Gibralter Rock</b>", 46.845616, -121.745454 ],
    ["<b>Liberty Cap</b>", 46.862762, -121.774806],
    ["<b>Saint Andrews Rock</b>", 46.853287, -121.789636],
    ["<b>Steamboat Prow</b>", 46.871796, -121.732176],

    ];

    for (var i = 0; i < planes.length; i++) {
      marker = new L.marker([planes[i][1],planes[i][2]])
        .bindPopup(planes[i][0])
        .addTo(map);
    }

    /* smooth scroll */


  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
   
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });




});