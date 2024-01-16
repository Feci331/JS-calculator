const display = document.getElementById("display");
function appendToDisolay(input) {
  display.value += input;
}

function clearDisplay(params) {
  display.value = "";
}

function calculate(params) {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
