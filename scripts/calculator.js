// this are the text fields for the results and operations

let operation = document.querySelector("#operation")
let result = document.querySelector("#result")

let hiddenOperation = "";

let multiplicationButton = document.querySelector("#multiplication")
let eraseAll = document.querySelector("#erase-all")

let eraseButton = document.querySelector("#erase-button")
let evaluateButton = document.querySelector("#evaluate-button")

multiplicationButton.addEventListener("click", (event) => {
    operation.innerHTML += "x";
    hiddenOperation += "*"
})

eraseAll.addEventListener("click", () => {
    operation.innerHTML = "";
    hiddenOperation = "";
    result.innerHTML = "0";
})

eraseButton.addEventListener("click", (event) => {
    let updated = operation.innerHTML.split("");
    updated.pop();
    operation.innerHTML = updated.join("");

})

evaluateButton.addEventListener("click", () => {
    try {
        let evaluatedExpression = eval(hiddenOperation)
        result.innerHTML = "" + evaluatedExpression
        operation.innerHTML = ""; // a ** b = a^b
        hiddenOperation = ""
    } catch (error) {
        console.log(error)
        alert(`la operacion ${operation.innerHTML} no es valida`)
        operation.innerHTML = "";
        hiddenOperation = ""
    }
})



// this buttons write symbols on the operation field
let wirtingButtons = document.querySelectorAll(".button-column .writing-button")

for (let i in wirtingButtons) {
    wirtingButtons[i].addEventListener("click", (event) => {
        operation.innerHTML = operation.innerHTML + event.target.value
        hiddenOperation += event.target.value
    })
}
