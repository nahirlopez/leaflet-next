// route.ts
let lat: number = 0; 
let long: number = 0; 

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition);
} else {
  const x: HTMLDivElement = document.createElement("div");
  x.innerHTML = "Geolocation is not supported by this browser.";
}

function getPosition(position: GeolocationPosition) {
  lat = position.coords.latitude;
  long = position.coords.longitude;
  alert(lat + " and " + long);
}

export { lat, long };
