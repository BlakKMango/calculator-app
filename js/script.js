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
let numA = ""
let numB = ""

function showCurrentNumber() {
    currentNumAsString = currentNum.join("")
    calcScreen.textContent = currentNumAsString
    return currentNumAsString
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
    calcScreen.textContent = ""
    currentNum = []
    return currentNum
}

function saveNumA() {
    numA = currentNum.join("")
    clearCurrentNum()
    console.log(numA)
    return numA
}

function saveNumB() {
    numB = currentNum.join("")
    clearCurrentNum()
    console.log(numB)
    return numB
}

// function buildEquation(e) {
//     //When an operator is clicked I want to build a calcultation
//     //The calculation should be able to do previous number --operator-- currentNumber
//     //For that I will need to store the previous number when it is cleared
//     switch (e.target.textContent) {
//         case "+": 

//     }
// }

calcNumbers.forEach(number => number.addEventListener("click", inputNumber))

clearEntryButton.addEventListener("click", clearLastNumber)

clearButton.addEventListener("click", clearCurrentNum)

calcOperators.forEach(number => number.addEventListener("click", saveNumA))

equalsButton.addEventListener("click", () => {
    saveNumB();
    // operate();
    }
)





