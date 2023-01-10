function showTemperature(response) {
  console.log(response.data);
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let realTemp = document.querySelector("#current-degrees");
  realTemp.innerHTML = `${temperature}⁰C`;
}

function showCity(event) {
  event.preventDefault();
  let input = document.querySelector("input#searchbar");
  searchCity(input.value);
}
let formCity = document.querySelector("form");
formCity.addEventListener("submit", showCity);

function searchCity(city) {
  let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
