const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
    method: 'GET',
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '5fc595e612msh0c5c0a26d28fd1cp1a1a9ejsna02ab6b21bab',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const loader = document.querySelector(".loader");
const cityInput = document.querySelector("#city");
let city = "Delhi";

const showLoader = () => {
  loader.style.display = "block";
}

const hideLoader = () => {
  loader.style.display = "none";
}

const getWeatherData = (city) => {
  showLoader();
  cityname.innerHTML = city;
  fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then(response => response.json())
    .then(response => {
      temp.innerHTML = response.temp+"℃";
      feels_like.innerHTML = response.feels_like+"℃";
      humidity.innerHTML = response.humidity+"℃";
      min_temp.innerHTML = response.min_temp+"℃";
      max_temp.innerHTML = response.max_temp+"℃";
      hideLoader();
    })
    .catch(err => {
      hideLoader();
      console.log(err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  getWeatherData(city);
});

document.querySelector("#submit").addEventListener("click", (e) => {
  e.preventDefault();
  city = cityInput.value.toUpperCase();
  getWeatherData(city);
});


// const getweather = (city) => {

//     cityname.innerHTML= city;
//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
//         .then(response => response.json())
//         .then(response => {

//             temp.innerHTML = response.temp
//             feels_like.innerHTML = response.feels_like
//             humidity.innerHTML = response.humidity
//             min_temp.innerHTML = response.min_temp
//             max_temp.innerHTML = response.max_temp


//             console.log(response)
//         })
//         .catch(err => console.log(err));
// }
// document.querySelector("#submit").addEventListener("click",(e)=>{
//     e.preventDefault();
//     getweather(city.value.toUpperCase());
// })
// getweather("JAMMU");

