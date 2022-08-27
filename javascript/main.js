const primaryNav = document.querySelector('#primary-navigation'); 
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");
    
    if(visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        document.getElementById("menu").classList.add("close-menu");
        document.getElementById("menu").classList.remove("open-menu");
    } else if (visibility === "true"){
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        document.getElementById("menu").classList.add("open-menu");
        document.getElementById("menu").classList.remove("close-menu");
    }
});


// map API//
var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-123.11, 49.22]),
      zoom: 12
    }),
});

//code to add a pin to the map
var markers = new ol.layer.Vector({
    source: new ol.source.Vector(),
    style: new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: '../images/pin.png'
      })
    })
  });
  map.addLayer(markers);
  
  var marker = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([-123.108, 49.225])));
  markers.getSource().addFeature(marker);