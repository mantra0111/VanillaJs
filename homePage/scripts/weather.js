const cityDisplay = document.getElementById("city-name")
const temperature = document.getElementById('temperature')
//create new request object
const request = new XMLHttpRequest();
// request credentials
const KEY = '7b4035b92033c24eae8fc6fb561f2d75'
let city = 'London'
const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + KEY
fetch(url)
    .then(res => {
        return res.json()
    })
    .then((data) => {
        temperature.innerHTML = data.main.temp
        cityDisplay.innerHTML = 'weather in ' + data.name
    }).catch((err) => {
        alert('something went wrong, check the console')
        console.log(err)
    })