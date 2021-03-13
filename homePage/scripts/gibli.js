const cityDisplay = document.getElementById("city-name")
const temperature = document.getElementById('temperature')
//create new request object
const request = new XMLHttpRequest();
// request credentials
const KEY = '7b4035b92033c24eae8fc6fb561f2d75'
const gibli = 'https://ghibliapi.herokuapp.com/films'
let city = 'London'
const url = 'api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + KEY
// open a new connection with the credentials as arguments
// the third argument means if the request should be asynchronous
request.open('GET', gibli, true)
// when the request loads we can start doing stuff with it
request.onload = function () {
    // var data = JSON.parse(this.response)
    // if (request.status >= 200 && request.status < 400) {
    //     console.log(this.response)
    //     console.log(data)
    //     // data.forEach((element) => {
    //     //     console.log(element.weather.main)
    //     //     console.log(element.main.temp)
    //     //     cityDisplay.innerHTML = element.name
    //     //     temperature.innerHTML = element.main.temp
    //     // });
    // } else {
    //     console.log('error')
    // }
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach((movie) => {
            console.log(movie.title)
        })
    } else {
        console.log('error')
    }
}

request.send()
