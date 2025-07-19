
function adjustRecipe() {
  const amount = parseFloat(document.getElementById("amount").value);
  const second = parseFloat(document.getElementById("second").value);
  const operator = document.getElementById("operator").value;
  let result;

  switch (operator) {
    case "+": result = amount + second; break;
    case "-": result = amount - second; break;
    case "*": result = amount * second; break;
    case "/": result = second !== 0 ? amount / second : "Can't divide by zero"; break;
    case "**": result = amount ** second; break;
    default: result = "Invalid operator";
  }

  document.getElementById("result").textContent = result;
}
