const calculator = document.querySelector(".calc")
const calcScreen = calculator.querySelector(".calc-screen-inner")
const calcButtons = calculator.querySelectorAll(".calc-button")
const calcNumbers = calculator.querySelectorAll(".button-num")
const calcOperators = calculator.querySelectorAll(".button-operator")
const calcFunctions = calculator.querySelectorAll(".button-func")
const equalsButton = calculator.querySelector("#equals")
const clearEntryButton = calculator.querySelector("#ce")
const clearButton = calculator.querySelector("#clear")

let currentValue = []
let allNumbers = []
let result = 0

function inputValue(e) {
    const value = e.target.textContent
    currentValue.push(value)
    showValue(currentValue)
    return currentValue
}

function showValue(num) {
    let numString = num.join("")
    calcScreen.textContent = numString
    return numString
}

function saveNum() {
    const num = currentVal
}

calcNumbers.forEach(number => number.addEventListener("click", inputValue))
calcOperators.forEach(number => number.addEventListener("click", inputValue))
calcNumbers.forEach(number => number.addEventListener("click", inputValue))