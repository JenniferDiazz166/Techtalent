let displayValue: string = '';

function addToDisplay(value: string): void {
  if (value === 'reset') {
    displayValue = '';
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay(): void {
  displayValue = '';
  updateDisplay();
}

function calculate(): void {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function updateDisplay(): void {
  const display = document.getElementById('display') as HTMLInputElement;
  display.value = displayValue;
}