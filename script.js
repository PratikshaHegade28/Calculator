// script.js

let displayValue = "";

function appendValue(value) {
    const display = document.getElementById("display");
    if (displayValue === "0" && value !== ".") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    display.innerText = displayValue;
}

function clearDisplay() {
    displayValue = "0";
    document.getElementById("display").innerText = displayValue;
}

function deleteDigit() {
    displayValue = displayValue.slice(0, -1) || "0";
    document.getElementById("display").innerText = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch {
        displayValue = "Error";
    }
    document.getElementById("display").innerText = displayValue;
}
