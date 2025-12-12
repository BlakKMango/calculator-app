const calculator = document.querySelector(".calc")
const calcScreen = calculator.querySelector(".calc-screen-inner")
const calcButtons = calculator.querySelectorAll(".calc-button")
const calcNumbers = calculator.querySelectorAll(".button-num")
const calcOperators = calculator.querySelectorAll(".button-operator")
const calcFunctions = calculator.querySelectorAll(".button-func")
const equals = calculator.querySelector("#equals")

let currentNum = [0]

function enterNumber(e) {
    console.log(e.target.textContent)
}

calcNumbers.forEach(number => 
    number.addEventListener("click", enterNumber)   
)


