const calcScreen = document.querySelector(".calc-screen-inner")
const numButtons = document.querySelectorAll(".button-num")
const operators = document.querySelectorAll(".button-operator")
const equalsButton = document.querySelector("#equals")

let currentNum = []
let display = []
let history = []
let operator;
let total = 0

function enterNumber(e) {
    const num = e.target.textContent
    currentNum.push(num)
}

function showOnScreen(e, total = null) {
    if (total != null) {
        display = [total];
        calcScreen.textContent = total;
        currentNum = [];
        history = [];
        operator = undefined;
        return;
    } else {
        let value = e.target.textContent
        display.push(value)
        calcScreen.textContent = display.join("")
        if (e.target.classList.contains("button-operator")) {
            operator = value
            console.log(operator)
        }
        console.log(display)
        return display
    }
    
}

function saveNumber() {
    history.push(Number(currentNum.join("")))
    currentNum = []
    console.log(history)
}

function calculate() {
    if (total === 0) {
        total = history[0]
    } else {
        switch (operator) {
            case "+":
                total += history[history.length - 1];
                break;
            case "-":
                total -= history[history.length - 1];
                break;
            case "x":
                total *= history[history.length - 1];
                break;
            case "&#247":
                total /= history[history.length - 1];
                break;
        }
    }
    console.log(total)
    return total
}

function clear() {
    display = [];
}

numButtons.forEach(button => button.addEventListener("click", (e) => {
    enterNumber(e);
    showOnScreen(e)
}))

operators.forEach(operator => operator.addEventListener("click", (e) => {
    showOnScreen(e);
    saveNumber();
    calculate();
}))

equalsButton.addEventListener("click", (e) => {
    saveNumber();
    let total = calculate(e);
    display = [];
    currentNum = [total];
    showOnScreen(e, total)
})



