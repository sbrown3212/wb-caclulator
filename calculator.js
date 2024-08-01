function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function power(num1, num2) {
  return num1 ** num2;
}

function mod(num1, num2) {
  return num1 % num2;
}

function sqrt(num1) {
  return Math.sqrt(num1);
}


function calculate(expression) {
  // Split expression into individual tokens
  const tokens = expression.split(` `)

  // Alert if too many or too few inputs
  if (tokens.length < 2 || tokens.length > 3) {
    alert(`Invalid expression. Please try again.`);
    return;
  }

  // Initialize variables
  let operator;
  let num1;
  let num2;
  
  // Assign values to variables. Alert if variables are invalid.
  if (tokens.length === 3) {
    operator = tokens[1];
    num1 = Number(tokens[0]);
    num2 = Number(tokens[2]);
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      alert(`Invalid number(s). Please try again.`);
      return;
    }
  }
  if (tokens.length === 2) {
    operator = tokens[0];
    num1 = Number(tokens[1])
  }
  if (Number.isNaN(num1)) {
    alert(`Invalid number. Please try again.`);
    return;
  }

  const validOperators = [`+`, `-`, `*`, `/`, `**`, `%`, `sqrt`]
  
  // Alert if operator is invalid
  if (!validOperators.includes(operator)) {
    alert(`Invalid operator. Please try again.`);
    return;
  }

  if (operator === `+`) {
    return add(num1, num2);
  }
  if (operator === `-`) {
    return subtract(num1, num2);
  }
  if (operator === `*`) {
    return multiply(num1, num2);
  }
  if (operator === `/`) {
    return divide(num1, num2);
  }
  if (operator === `**`) {
    return power(num1, num2);
  }
  if (operator === `%`) {
    return mod(num1, num2);
  }
  if (operator === `sqrt`) {
    return sqrt(num1);
  }
  
}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
