let display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    const lastChar = display.value[display.value.length - 1];
    if (lastChar !== operator && "+-*/".includes(lastChar)) {
        display.value = display.value.slice(0, -1);
    }
    display.value += operator;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
