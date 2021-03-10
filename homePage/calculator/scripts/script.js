// saving the text fields into memory 
let history = document.getElementById('history');
let result = document.getElementById('result')
result.style.visibility = "hidden"
// action functions
let clearHistory = (text) => {
    history.innerHTML = text
    result.innerHTML = "";
}
let eraseOne = () => history.innerHTML = history.innerHTML.slice(0, -1)
let evaluate = () => {
    result.style.visibility = "visible"
    result.innerHTML = eval(history.innerHTML);
    history.innerHTML = ''
}
// operator functions
let symbolsRegex = /\%|\+|\*|\-|\/|\.$/
let plus = () => symbolsRegex.test(history.innerHTML) || history.innerHTML == '' ? null : history.innerHTML += "+"
let minus = () => symbolsRegex.test(history.innerHTML) || history.innerHTML == '' ? null : history.innerHTML += "-"
let times = () => symbolsRegex.test(history.innerHTML) || history.innerHTML == '' ? null : history.innerHTML += "*"
let divided = () => symbolsRegex.test(history.innerHTML) || history.innerHTML == '' ? null : history.innerHTML += "/"
let module = () => symbolsRegex.test(history.innerHTML) || history.innerHTML == '' ? null : history.innerHTML += "%"
let decimal = () => {
    let allowed = true
    for (let index = 0; index < history.innerHTML.length; index++) {
        if (/\+|\*|\-|\/|\%/.test(history.innerHTML[index])) allowed = true
        if (history.innerHTML[index] === "." || /\%|\+|\*|\-|\/\.$/.test(history.innerHTML[index])) allowed = false
    }
    if (history.innerHTML == '') allowed = false
    if (allowed) history.innerHTML += "."
}
//events for actions
document.getElementById('erase').addEventListener('click', () => clearHistory(''))
document.getElementById('evaluate').addEventListener('click', () => evaluate())
document.getElementById('x').addEventListener('click', () => eraseOne())
//operators and symbols
document.getElementById('plus').addEventListener('click', () => plus())
document.getElementById('minus').addEventListener('click', () => minus())
document.getElementById('times').addEventListener('click', () => times())
document.getElementById('divided').addEventListener('click', () => divided())
document.getElementById('decimal').addEventListener('click', () => decimal())
document.getElementById('module').addEventListener('click', () => module())
// assign events to number buttons
let numbers = document.getElementsByClassName('number');
for (let number in numbers) {
    numbers[number].addEventListener('click', (event) =>
        history.innerHTML += event.target.value
    )
}