// this are the text fields for the results and operations
let operation = document.querySelector("#operation")
let result = document.querySelector("#result")


let eraseButton = document.querySelector("#erase-button")
let evaluateButton = document.querySelector("#evaluate-button")

eraseButton.addEventListener("click", (event) => {
    let updated = operation.innerHTML.split("");
    updated.pop();
    operation.innerHTML = updated.join("");

})

evaluateButton.addEventListener("click", () => {
    let evaluatedExpression = eval(operation.innerHTML)
    result.innerHTML = "" + evaluatedExpression
    operation.innerHTML = "";
})

// this buttons write symbols on the operation field
let wirtingButtons = document.querySelectorAll(".button-column .writing-button")

for (let i in wirtingButtons) {
    wirtingButtons[i].addEventListener("click", (event) => {
        operation.innerHTML = operation.innerHTML + event.target.value
    })
}
