const url = 'https://corona.lmao.ninja/v2/countries?yesterday&sort'


// <select> and its childs 
const countryOptions = document.getElementById('countries')
const searchData = document.getElementById('search-data')
const optGroup = document.getElementById('opt-group')
// this is the chart
var ctx = document.getElementById('myChart').getContext('2d')
let charContainer = document.getElementsByClassName('chart-container')


// to-handle data
let dataObj = []
let currentData = []

// displayed data
let countryDisplay = document.getElementById('country-name')
let populationDisplay = document.getElementById('population')
let casesDisplay = document.getElementById('cases')
let recoveredDisplay = document.getElementById('recovered')
let deathsDisplay = document.getElementById('deaths')


// event listener 
searchData.addEventListener('click', () => {
    currentData = dataObj.filter(element => element.country === countryOptions.value)
    let { country, population, cases, deaths, recovered } = currentData[0]
    countryDisplay.innerText = 'country: ' + country
    populationDisplay.innerText = 'population: ' + population
    casesDisplay.innerText = 'cases: ' + cases
    deathsDisplay.innerText = 'deaths: ' + deaths
    recoveredDisplay.innerText = 'recovered: ' + recovered

    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Cases', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'cases',
                data: [cases, recovered, deaths],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',//blue
                    'rgba(75, 192, 192, 0.2)',//green
                    'rgba(255, 99, 132, 0.2)',//red

                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',

                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
        }
    })

    console.log(currentData)
})

// asynchronous call for data
async function fetchData() {

    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            /*
                i think i will have to save this in a variable to acces
                the respective country's data, remember to check the
                chart.js library so we can make cute charts
        
                display the data in headers for now, remember to display
                the image
            */
            dataObj = data
            for (let element in data) {
                let option = document.createElement("option")
                option.value = data[element].country
                option.text = data[element].country
                optGroup.appendChild(option)
            }
        })
        .catch(err => {
            alert('something went wrong')
            console.log(err)
        })
}

fetchData()


