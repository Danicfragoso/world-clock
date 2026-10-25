setInterval(function timeLisbon() {
let lisbonElement = document.querySelector("#lisbon");
let lisbonDateElement = lisbonElement.querySelector(".date");
let lisbonTimeElement = lisbonElement.querySelector(".time");
lisbonDateElement.innerHTML = moment().format("MMMM Do YYYY");
lisbonTimeElement.innerHTML = moment().tz("Europe/Lisbon").format("HH:mm:ss");
}, 1000)

setInterval(function timeAmsterdam () {
let amsterdamElement = document.querySelector("#amsterdam");
let amsterdamDateElement = amsterdamElement.querySelector(".date");
let amsterdamTimeElement = amsterdamElement.querySelector(".time");
amsterdamDateElement.innerHTML = moment().format("MMMM Do YYYY");
amsterdamTimeElement.innerHTML = moment().tz("Europe/Amsterdam").format("HH:mm:ss");
}, 1000)

function updateCity(event) {
  let cityTimeZone = event.target.value;
if(cityTimeZone === 'current') {
    cityTimeZone = moment.tz.guess();

}

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#display-city");

  citiesElement.innerHTML = `
    <div class="left-side">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("HH:mm:ss")}</div>
    </div>
  `;
}
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);


