const calculator = document.querySelector(".calc")
const calcScreen = calculator.querySelector(".calc-screen-inner")
const calcButtons = calculator.querySelectorAll(".calc-button")
const calcNumbers = calculator.querySelectorAll(".button-num")
const calcOperators = calculator.querySelectorAll(".button-operator")
const calcFunctions = calculator.querySelectorAll(".button-func")
const equalsButton = calculator.querySelector("#equals")
const clearEntryButton = calculator.querySelector("#ce")
const clearButton = calculator.querySelector("#clear")

let userInput = []
let previousNums = []
let numB = ""

function showCurrentNumber() {
    let inputToString = userInput.join("")
    calcScreen.textContent = inputToString
    return inputToString
}

function inputNumber(e) {
    const num = e.target.textContent
    userInput.push(num)
    return userInput
}

function clearLastNumber() {
    let newNum = userInput.pop()
    showCurrentNumber()
}

function clearCurrentNum() {
    calcScreen.textContent = ""
    userInput = []
    return userInput
}

function saveNumA() {
    previousNums.push(userInput.join(""))
    // clearCurrentNum()
    console.log(previousNums)
    return previousNums
}

function saveNumB() {
    numB = userInput.join("")
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

calcNumbers.forEach(number => number.addEventListener("click", (e) => {
    inputNumber(e);
    showCurrentNumber();
    }))

clearEntryButton.addEventListener("click", clearLastNumber)

clearButton.addEventListener("click", clearCurrentNum)

calcOperators.forEach(number => number.addEventListener("click", saveNumA))

equalsButton.addEventListener("click", () => {
    saveNumB();
    // operate();
    }
)





