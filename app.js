const manualButton = document.getElementById("manualButton");
const autoButton = document.getElementById("autoButton");
const message = document.getElementById("message");

const map = L.map("map").setView(
    [40.0583, -74.4057],
    7
);

L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);

const monksville = L.marker(
    [41.0907, -74.4305]
).addTo(map);

monksville.bindPopup(`
<b>Monksville Reservoir</b>
<br>
County: Passaic
<br>
Approx. 505 Acres
<br>
Status: Prototype Record
`);

const delawareLake = L.marker(
    [40.9736, -74.9575]
).addTo(map);

delawareLake.bindPopup(`
<b>Delaware Lake</b>
<br>
County: Warren
<br>
Approx. 105 Acres
<br>
Status: Prototype Record
`);
