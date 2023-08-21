var displayValue = "";

function Display(value) {
    const lastChar = displayValue.slice(-1);
    const operators = ['+', '-', '*', '/'];

    if (operators.includes(lastChar) && operators.includes(value)) {
        displayValue = displayValue.slice(0, -1) + value;
    } else {
        displayValue += value;
    }

    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

function calculateResult() {
    const displayElement = document.getElementById("display");

    if (displayValue != "") {
        try {
            displayValue = eval(displayValue);
            document.getElementById("display").value = displayValue;
        } catch (error) {
            document.getElementById("display").value = "Dude, that's an error!";
        }
    } else {
        displayElement.value = "";
    }
}

