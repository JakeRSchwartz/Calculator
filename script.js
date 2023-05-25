const numButtons = document.querySelectorAll('[data-number]');
const opButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
const delButton = document.querySelector('.delete');
const previousOpScreen = document.getElementById('lastOperation');
const currentOpScreen = document.getElementById('currentOperation');

let boolResetScreen = false;
let currentOp = '';
let Thisoperator = ''
let previousOp=''
currentOpScreen.textContent = ''

numButtons.forEach(button => {
button.addEventListener('click', () => {appendNumber(button.textContent)
    displayScreen()
})})

opButtons.forEach(button => {
button.addEventListener('click', () => {setOperand(button.textContent)
    displayScreen()
})})

clearButton.addEventListener('click', () => clear());

equalButton.addEventListener('click', () => {
    compute(Thisoperator, currentOp, previousOp);
    displayScreen(currentOp);
})
delButton.addEventListener('click',() => Delete())

function appendNumber(number) {
    if(currentOp === '.' && currentOp.includes('.')) return;
    currentOp += number.toString()
    console.log(currentOp)
   }     
function setOperand(operator){
    if(currentOp === '' && operator === '-'){
        appendNumber(operator);
        return;
    } 
    if(previousOp !== ''){
        compute(Thisoperator, currentOp, previousOp)
    }
    Thisoperator = operator;
    previousOp = currentOp;
    currentOp = '';
}    

function clear(){
    currentOp = ''
    previousOp= ''
    Thisoperator = '';
    boolResetScreen = false;
    currentOpScreen.textContent = '';
    previousOpScreen.textContent = '';
}
function Delete(){
   currentOp = currentOp.toString().slice(0, -1);
   displayScreen();

}
function compute(operator, currentOper, previousOper){
let answer;
const previous = parseFloat(previousOper);
const current = parseFloat(currentOper);
switch(operator){
    case '+':
       answer = add(previous, current);
        break;
    case '-':
        answer = subtract(previous, current)
        break;
    case 'x':
        answer = multiply(previous, current)
        break;
    case '÷':
        answer = divide(previous, current)
        break;
    default:
        return;
}
currentOp = Math.trunc(answer*100)/100;
Thisoperator = '';
previousOp= '';
}

function displayScreen(){
    currentOpScreen.textContent = currentOp;
    if(Thisoperator !== ''){
        previousOpScreen.textContent = previousOp + ' ' + Thisoperator;
    }
    else{
    previousOpScreen.textContent = previousOp;

    }}

function add(a, b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}