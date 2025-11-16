// map.js

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("map")) {

    const map = L.map('map').setView([-26.2041, 28.0473], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      .addTo(map);

    L.marker([-25.7479, 28.2293])
      .addTo(map)
      .bindPopup("Pretoria Head Office");

    L.marker([-33.9249, 18.4241])
      .addTo(map)
      .bindPopup("Cape Town Depot");

    L.marker([-29.8587, 31.0218])
      .addTo(map)
      .bindPopup("Durban Branch");
  }
});

