const calculator = document.querySelector(".calc")
const calcScreen = calculator.querySelector(".calc-screen-inner")
const calcButtons = calculator.querySelectorAll(".calc-button")
const calcNumbers = calculator.querySelectorAll(".button-num")
const calcOperators = calculator.querySelectorAll(".button-operator")
const calcFunctions = calculator.querySelectorAll(".button-func")
const equalsButton = calculator.querySelector("#equals")
const clearEntryButton = calculator.querySelector("#ce")
const clearButton = calculator.querySelector("#clear")

let currentNum = []

function showCurrentNumber() {
    const currentNumAsString = currentNum.join("")
    calcScreen.textContent = currentNumAsString
}

function inputNumber(e) {
    const num = e.target.textContent
    currentNum.push(num)
    showCurrentNumber()
    return currentNum
}

function clearLastNumber() {
    let newNum = currentNum.pop()
    showCurrentNumber()
}

function clearCurrentNum() {
    currentNum = []
    showCurrentNumber()
    return currentNum
}

calcNumbers.forEach(number => number.addEventListener("click", inputNumber))

clearEntryButton.addEventListener("click", clearLastNumber)

clearButton.addEventListener("click", clearCurrentNum)




