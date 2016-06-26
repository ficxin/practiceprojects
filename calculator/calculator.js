var defaultValue = '<span id="decimal">0.</span>',
 		currentValue = "",
		totalValue = "",
		previousOperator = "";

document.body.addEventListener("click", function(event) {
	var buttonContent = event.target.textContent;

	if (event.target.nodeName == 'BUTTON')
		if (Number(buttonContent) || buttonContent==="0") {
			currentValue += buttonContent;
			display(currentValue, digitalize);
		} 
		else if (buttonContent == "CA") {
			currentValue = "";
			totalValue = "";
			display(defaultValue);
		}
		else if (buttonContent == "+") {
			if (!previousOperator)
				updatePreviousOperator(buttonContent);

			if (currentValue) {
				if (totalValue) {
					updateTotalValue(Number(totalValue), Number(currentValue), previousOperator);
				} else {
					totalValue = currentValue;
				}
				currentValue = "";
				updatePreviousOperator(buttonContent);
				display(totalValue.toString(), digitalize);
			}
		}
		else if (buttonContent == "–") {
			if (!previousOperator)
				previousOperator = "-";

			if (currentValue) {
				if (totalValue) {
					updateTotalValue(Number(totalValue), Number(currentValue), previousOperator);
				} else {
					totalValue = currentValue;
				}
				currentValue = "";
				updatePreviousOperator(buttonContent);
				display(totalValue.toString(), digitalize);
			}
		}
		else if (buttonContent == "x") {
			if (!previousOperator)
				updatePreviousOperator(buttonContent);

			if (currentValue) {
				if (totalValue) {
					updateTotalValue(Number(totalValue), Number(currentValue), previousOperator);
				} else {
					totalValue = currentValue;
				}
				currentValue = "";
				updatePreviousOperator(buttonContent);
				display(totalValue.toString(), digitalize);
			}
		}
		else if (buttonContent == "÷") {
			if (!previousOperator)
				updatePreviousOperator(buttonContent);

			if (currentValue) {
				if (totalValue) {
					updateTotalValue(Number(totalValue), Number(currentValue), previousOperator);
				} else {
					totalValue = currentValue;
				}
				currentValue = "";
				updatePreviousOperator(buttonContent);
				display(totalValue.toString(), digitalize);
			}
		}
		else if (buttonContent == "=") {
			if (currentValue) {
				if (totalValue) {
					updateTotalValue(Number(totalValue), Number(currentValue), previousOperator);
				} else {
					totalValue = currentValue;
				}
				currentValue = "";
				previousOperator = "";
				display(totalValue.toString(), digitalize);
			}
		}
});

function digitalize(value) {
	if (value.length > 9)
		value = value.slice(0, 9);
	
	var decimalIndex = value.indexOf(".");
	if (decimalIndex !== -1) {
		var span = '<span id="decimal">' + value.substring(decimalIndex-1, decimalIndex+1) + '</span>';
		var result = value.substring(0, decimalIndex-1) + span + value.substring(decimalIndex+1, value.length);
	} else {
		var span = '<span id="decimal">' + value[value.length-1] + '.</span>';	
		var result = value.substring(0, value.length-1) + span;
	}
  console.log(value);
  console.log(result);
	return result;
}

function display(value, callback) {
	if (callback) {
		document.getElementById('led').innerHTML = callback(value);
	} else {
		document.getElementById('led').innerHTML = value;
	}
}

function updateTotalValue(n1, n2, operator) {
	switch (previousOperator) {
		case "+":
			totalValue = n1 + n2;
			break;
		case "-":
			totalValue = n1 - n2;
			break;
		case "x":
			totalValue = n1 * n2;
			break;
		case "÷":
			totalValue = n1 / n2;
	}
}

function updatePreviousOperator(operator) {
	previousOperator = operator
}