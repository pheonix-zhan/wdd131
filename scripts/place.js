// ---------- Footer: Current Year & Last Modified ----------
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// ---------- Wind Chill Calculation ----------
function calculateWindChill(tempC, windSpeedKmh) {
  return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windSpeedKmh, 0.16) + 0.3965 * tempC * Math.pow(windSpeedKmh, 0.16);
}

// Static inputs (replace with dynamic later)
const temperature = 27; // °C
const windSpeed = 1;    // km/h  // Fixed: Updated to match HTML ("Wind: 1km/h")

// Display wind chill
const windChillElement = document.getElementById('windchill');  // Fixed: Changed to lowercase "windchill" to match HTML ID

let windChillDisplay;

if (temperature <= 10 && windSpeed > 4.8) {
  windChillDisplay = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
} else {
  windChillDisplay = "N/A";
}

windChillElement.textContent = `Wind Chill: ${windChillDisplay}`;
