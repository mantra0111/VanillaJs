const url = 'https://corona.lmao.ninja/v2/countries?yesterday&sort'


// <select> and its childs 
const countryOptions = document.getElementById('countries')
const searchData = document.getElementById('search-data')
const optGroup = document.getElementById('opt-group')

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
