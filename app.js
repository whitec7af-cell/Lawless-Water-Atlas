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

manualButton.addEventListener("click", () => {
    message.textContent = "Manual Locate selected.";
});

autoButton.addEventListener("click", () => {
    message.textContent = "Auto Locate selected.";
});
