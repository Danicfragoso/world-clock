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