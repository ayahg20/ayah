function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  let result;

  if (operator === '+') result = num1 + num2;
  else if (operator === '-') result = num1 - num2;
  else if (operator === '*') result = num1 * num2;
  else if (operator === '/') result = num1 / num2;
  else if (operator === '%') result = num1 % num2;
  else if (operator === '**') result = num1 ** num2;

  document.getElementById("result").textContent = `Result: ${result}`;
}

function compare() {
  const a = "5";
  const b = 5;

  let result = `
    "5" == 5 ➜ ${a == b}<br>
    "5" === 5 ➜ ${a === b}<br>
    Assignment a = b ➜ ${b}
  `;

  document.getElementById("compareResult").innerHTML = result;
}