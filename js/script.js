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
let allNumbers = []
let result = 0
let total = 0

function showNumber(num) {
    let stringNum = currentNum.join("")
    calcScreen.textContent = stringNum
    return stringNum
}

function inputValue(e) {
    const value = e.target.textContent
    currentNum.push(value)
    showNumber(currentNum)
    return currentNum
}

function clearLastNumber() {
    let newNum = currentNum.pop()
    showCurrentNumber()
}

function clearFullNum() {
    calcScreen.textContent = ""
    currentNum = []
    return currentNum
}

function saveNum() {
    const num = currentNum.join("")
    allNumbers.push(Number(num))
    clearFullNum()
    console.log(allNumbers)
    return allNumbers
}

function operate(e) {
    if (result === 0) {
        result = currentNum
    } else {
        switch (e.target.textContent) {
            case "+":
                result += currentNum
                break;
            case "=":
                result += currentNum
                showNumber(result)
                break;
        }
        console.log(result)
    }
}



calcNumbers.forEach(number => number.addEventListener("click", inputValue))

clearEntryButton.addEventListener("click", clearLastNumber)

clearButton.addEventListener("click", clearFullNum)

calcOperators.forEach(number => number.addEventListener("click", () => {
    inputValue
    // saveNum();
    operate();
}))

equalsButton.addEventListener("click", () => {
    saveNum();
    // operate();
    }
)





