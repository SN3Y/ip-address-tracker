const btn = document.querySelector('.btn');
const label_ip = document.querySelector('.label-ip');
const label_location = document.querySelector('.label-location');
const label_timezone = document.querySelector('.label-timezone');
const label_isp = document.querySelector('.label-isp');
const input = document.querySelector('.input-map');
var info = document.getElementById('datos').dataset.apiDatos;
var datosAPi = JSON.parse(info);

var greenIcon = L.icon({
    iconUrl: 'images/icon-location.svg',
    iconSize:     [38, 50], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

let lat = datosAPi.location.lat
let lng = datosAPi.location.lng
var  map = L.map('map').setView([lat, lng], 17);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, 
        }).addTo(map)
    L.marker([lat,lng],{icon:greenIcon}).addTo(map);