document.addEventListener("DOMContentLoaded", () => {
  const totalDisplay = document.querySelector(".total p");
  let currentInput = "";
  let previousInput = "";
  let operator = "";

  const updateDisplay = (value) => {
    totalDisplay.textContent = value;
  };

  const handleNumberClick = (number) => {
    currentInput += number;
    updateDisplay(currentInput);
  };

  const handleOperatorClick = (op) => {
    if (currentInput === "") return;
    if (previousInput !== "") {
      calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
  };

  const calculate = () => {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
      case "➕":
        result = prev + current;
        break;
      case "➖":
        result = prev - current;
        break;
      case "✖️":
        result = prev * current;
        break;
      case "➗":
        result = prev / current;
        break;
      default:
        return;
    }

    currentInput = result;
    operator = "";
    previousInput = "";
    updateDisplay(result);
  };

  const clear = () => {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay(0);
  };

  const deleteLast = () => {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || 0);
  };

  document.querySelectorAll(".number").forEach((button) => {
    button.addEventListener("click", () =>
      handleNumberClick(button.textContent)
    );
  });

  document
    .querySelector(".sumar")
    .addEventListener("click", () => handleOperatorClick("➕"));
  document
    .querySelector(".restar")
    .addEventListener("click", () => handleOperatorClick("➖"));
  document
    .querySelector(".multiplicar")
    .addEventListener("click", () => handleOperatorClick("✖️"));
  document
    .querySelector(".dividir")
    .addEventListener("click", () => handleOperatorClick("➗"));
  document.querySelector(".igual").addEventListener("click", calculate);
  document.querySelector(".do").addEventListener("click", clear);
  document.querySelector(".flecha").addEventListener("click", deleteLast);
});
