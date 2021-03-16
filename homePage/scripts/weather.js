const cityDisplay = document.getElementById("city-name")
const temperature = document.getElementById('temperature')
const fetchButton = document.getElementById('fetch-button')
const cityInput = document.getElementById('city-input')
const weatherStatus = document.getElementById('weather-status')
const weatherIcon = document.getElementById('weather-icon')
// request credentials
const KEY = '7b4035b92033c24eae8fc6fb561f2d75'
let url = ''
cityInput.addEventListener('change', (event) => {
    let eventText = event.target.value
    let city = eventText[0].toUpperCase() + eventText.substring(1)
    url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + KEY
})
let weather = ''
const possibleWathers = ['Clouds', 'Clear', 'rain', 'smoke', 'snow']

fetchButton.addEventListener('click', (event) => {
    event.preventDefault();
    //we fetch for data with the credentials 

    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            temperature.innerHTML = data.main.temp + "° C"
            cityDisplay.innerHTML = 'weather in ' + data.name
            weatherStatus.innerHTML = data.weather[0].main
            weather = data.weather[0].main
            weatherIcon.src = '../images/weatherImages/clouds.png'
        }).then(data => {
        })
        .catch((err) => {
            alert("we couldn't find your city")
            console.log(err)
        })
})

