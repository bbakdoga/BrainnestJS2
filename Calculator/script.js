
// getting elements
const buttons = document.getElementsByClassName('number');
const operation = document.getElementsByClassName('operation');
const equals = document.getElementsByClassName('equals');
const reset = document.getElementsByClassName('reset');
const sign = document.getElementsByClassName('sign');
const percent = document.getElementsByClassName('percent');
const display = document.getElementById('display');

// variables for calcuations
let displayValue = '0';
let curentOperand = null;
let firstOperand = null;
let secondOperand = null;
let operator = null;
let secondOperator = null;
let result = null;
//keyboard input
document.addEventListener('keydown',(event) => {
  if( event.key == "0" ||event.key == "1" || event.key == "2" || event.key == "3" || event.key == "4" || event.key == "5"|| event.key == "6"
  || event.key == "7"|| event.key == "8"|| event.key == "9" ){
    event.key.click();
  }
});
//output function for calcuation results
function updateDisplay() {
  display.innerText = displayValue;
  if(displayValue.length > 9) {
      display.innerText = displayValue.substring(0, 9);
  }
}
// set the result to 0
updateDisplay();

// concatinating numbers
function addnumber(number){
  if (number === '.' && displayValue.includes('.'))
  { 
    return;
  }
  if(curentOperand != null){
    curentOperand = curentOperand.toString() + number.toString();
  } else {
    curentOperand = number.toString();
  }
  console.log(curentOperand);
  displayValue = curentOperand;
  updateDisplay();
}
//handling the operaiton signs
function inputOperation(operation){
  if(curentOperand === null) return;
  if(firstOperand != null){
    operate(firstOperand,curentOperand,operator);
  }
  displayValue = operation;
  operator = operation;
  firstOperand = curentOperand;
  curentOperand = null;
  console.log(displayValue);
  updateDisplay();
}
// main operate function
function operate(first,second, op){
  if(curentOperand != null & firstOperand != null){
    var a = parseFloat(first);
    var b = parseFloat(second);
    if(op === '+' ){
      result = a + b;
      console.log("here");
    } else if (op === '-'){
      result = a - b;
    } else if (op === '*'){
      result = a * b;
    } else if (op === '/'){
      if(second == 0){
        result = "Nice try ;)";
        
      } else {
        result = a / b;
      }
    }
    displayValue = result;
    curentOperand = result;
    firstOperand = null;
    updateDisplay();
  }
}
// function for reseting the calculator
function resetOperation(){
  curentOperand = null;
  result = null;
  firstOperand = null;
  displayValue = '0';
  updateDisplay();
}
// function for changing the signs
function signOperation(){
  if(curentOperand != null){
    var a = parseFloat(curentOperand);
     a = a * -1;
     curentOperand = a;
     displayValue = curentOperand;
     updateDisplay(displayValue); 
  }
}
// function percent operation
function percentOperation(operation){
  if(curentOperand != null){
    var a = parseFloat(curentOperand);
    a = a / 100;
    curentOperand = a;
    displayValue = curentOperand;
    console.log("percentage ");
    updateDisplay(displayValue);
  }
}
console.log(displayValue);
//Event Listeners
Array.from(buttons).forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.innerText);
    addnumber(button.innerText);
  })
});

Array.from(operation).forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.innerText);
    inputOperation(button.innerText);
  })
});

Array.from(equals).forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.innerText);
    operate(firstOperand,curentOperand,operator);
  })
});

Array.from(reset).forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.innerText);
    resetOperation();
  })
});
Array.from(sign).forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.innerText);
    signOperation();
  })
});
Array.from(percent).forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.innerText);
    percentOperation();
  })
});