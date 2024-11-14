const uw = [43.47040812718247, -80.54375993036433];


const map = L.map('map').setView(uw, 13);

// Add OpenStreetMap tile layer
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const dp = [43.46999563971616, -80.5422889304771];
const marker = L.marker(dp).addTo(map)
    .bindPopup('This is the DP Library').openPopup();


const polygon = L.polygon([
    [43.4704704170445, -80.55757867038689],
    [43.4755935378348, -80.54320203062247],
    [43.470949913785475, -80.53826959956834],
    [43.464676574714744, -80.54174174260228]
]).addTo(map).bindPopup('UWaterloo!');


const popup = L.popup()
    .setLatLng(uw)
    .setContent('You are here!')
    .openOn(map);


function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(`The coordinates of this place are: ${e.latlng.toString()}`)
        .openOn(map);
}

// Add event listener for map clicks
map.on('click', onMapClick);