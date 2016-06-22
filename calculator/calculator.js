var defaultValue = '<span id="decimal">0.</span>',
 		currentValue = "",
		totalValue = "";

document.body.addEventListener("click", function(event) {
	if (event.target.nodeName == 'BUTTON')
		if (Number(event.target.textContent)) {
			currentValue += event.target.textContent;
			display(currentValue, digitalize);
		} 
		else if (event.target.textContent == "CA") {
			currentValue = "";
			totalValue = "";
			display(defaultValue);
		}
		else if (event.target.textContent == "+") {
			if (currentValue) {
				if (totalValue) {
					totalValue = add(Number(totalValue), Number(currentValue));
				} else {
					totalValue = currentValue;
				}
				currentValue = "";
				display(totalValue.toString(), digitalize);
			}
		}
		else if (event.target.textContent == "–") {
			if (currentValue) {
				if (totalValue) {
					totalValue = subtract(Number(totalValue), Number(currentValue));
				} else {
					totalValue = currentValue;
				}
				currentValue = "";
				display(totalValue.toString(), digitalize);
			}
		}
		else if (event.target.textContent == "x") {
			if (currentValue) {
				if (totalValue) {
					totalValue = multiply(Number(totalValue), Number(currentValue));
				} else {
					totalValue = currentValue;
				}
				currentValue = "";
				display(totalValue.toString(), digitalize);
			}
		}
		else if (event.target.textContent == "÷") {
			if (currentValue) {
				if (totalValue) {
					totalValue = divide(Number(totalValue), Number(currentValue));
				} else {
					totalValue = currentValue;
				}
				currentValue = "";
				display(totalValue.toString(), digitalize);
			}
		}
		else if (event.target.textContent == "=") {
			console.log('equal');
		}
});

function digitalize(value) {
	if (value.length > 9)
		value = value.slice(0, 9);
	var span = '<span id="decimal">' + value.slice(value.length-1) + '.</span>';
	var result = value.slice(0, value.length-1) + span;
	return result;
}

function display(value, callback) {
	if (callback) {
		document.getElementById('led').innerHTML = callback(value);
	} else {
		document.getElementById('led').innerHTML = value;
	}
}

function add(n1, n2) {
	return n1 + n2;
};

function subtract(n1, n2) {
	return n1 - n2;
};

function multiply(n1, n2) {
	return n1 * n2;
};

function divide(n1, n2) {
	return n1 / n2;
};