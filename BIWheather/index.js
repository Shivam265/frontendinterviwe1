let inputvalue = document.querySelector("#cityinput");

var btn = document.querySelector("#add");

var city = document.querySelector("#cityoutput");

var descrip = document.querySelector("#temp");

var temp = document.querySelector("#wind");

apik = "b5e23450cbaa0d4f8d43f533f5bbaad4";

function convertion(val) {
  return (val - 273).toFixed(3);
}

btn.addEventListener("click", function () {
  //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  https: fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputvalue.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())

    .then((data) => {
      var nameval = data["name"];
      var descrip = data["weather"]["0"]["description"];
      var temprature = data["main"]["temp"];
      var wndspeed = data["wind"]["speed"];

      city.innerHTML = `weather of <span>${nameval}<span`;

      temp.innerHTML = `Temprature:<span>${convertion(temprature)} C</span>`;

      description.innerHTML = `sky conditions: <span>${descrip} km/h</span>`;

      wind.innerHTML = `Wind Speed:<span>${wndspeed} km/h<span>`;
    })

    .catch((err) => alert("You entered wrong city name "));
});
