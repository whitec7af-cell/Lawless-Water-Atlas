const testWater = L.marker(
    [40.903, -74.423]
).addTo(map);

testWater.bindPopup(`
<b>Monksville Reservoir</b>
<br>
County: Passaic
<br>
Status: Test Water
`);
