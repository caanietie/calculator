////////////////////////////////////////////
// Calculator program                     //
// const author = 'Clement Anietie'       //
// const email = 'aakjhonclems@gmail.com' //
// const date = 'Sunday 19 July 2020'     //
////////////////////////////////////////////

const genColor = function(){
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

const add = function(firstNum, secondNum){
	return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum){
	return firstNum - secondNum;
};

const multiply = function(firstNum, secondNum){
	return firstNum * secondNum;
};

const divide = function(firstNum, secondNum){
	return firstNum / secondNum;
};

const operate = function(opr, firstNum, secondNum){
	switch(opr){
		case '+':
			return add(firstNum, secondNum);
		case '-':
			return subtract(firstNum, secondNum);
		case '×':
		case '*':
			return multiply(firstNum, secondNum);
		case '÷':
		case '/':
			return divide(firstNum, secondNum);
		default:
			return undefined;
	}
};

let opr = '';
let tmpStr = '';
let numArry = [];
let memStore = null;
let oprPress = false;

const numBtnColor = genColor();
const funcBtnColor = genColor();

const numArryPush = function(dgt){
	if(numArry.length < 2) numArry.push(dgt);
	else{
		alert('Not Allowed, press AC');
		document.write(numArry);
		return false;
	}
};

const displayDigit = function(dgt){
	const tsDiv = document.querySelector('#topScreen');
	if(oprPress){
		tmpStr = dgt;
		oprPress = false;
	}
	else{
		// work on the next if statement
		if(tmpStr.replace('-', '').replace('.', '').length == 13){
			alert('Only 13 digits are allowed');
			return false;
		}
		tmpStr += dgt;
		if(!tmpStr.includes('.') && +tmpStr == dgt) tmpStr = dgt;
	}
	tsDiv.textContent = tmpStr;
};

const displayOperator = function(operator){
	if(+tmpStr || tmpStr == '0'){
		numArryPush(+tmpStr);
		if(numArry.length == 2){
			const tsDiv = document.querySelector('#topScreen');
			tsDiv.textContent = +operate(opr, numArry[0], numArry[1]).toFixed(13);
			numArry = [+tsDiv.textContent];
		}
		tmpStr = '';
	}
	opr = operator;
	oprPress = true;
};

const displayPercent = function(){
	if(tmpStr){
		const tsDiv = document.querySelector('#topScreen');
		tmpStr = operate('÷', tmpStr, 100);
		if(numArry.length == 1 && (opr == '+' || opr == '-'))
			tmpStr = +operate('×', numArry[0], tmpStr).toFixed(13);
		tsDiv.textContent = tmpStr;
		oprPress = true;
	}
};

const displayDecimalPoint = function(){
	if(opr == '=') tmpStr = '';
	if(!tmpStr.includes('.')){
		const tsDiv = document.querySelector('#topScreen');
		if(oprPress){
			tmpStr = !tmpStr ? '0.' : '.';
			oprPress = false;
		}
		else tmpStr += !tmpStr ? '0.' : '.';
		tsDiv.textContent = tmpStr;
	}
};

const displayBackspace = function(){
	const tsDiv = document.querySelector('#topScreen');
	tmpStr = tsDiv.textContent;
	if(tmpStr){
		tmpStr = tmpStr.substring(0, tmpStr.length - 1);
		if(tmpStr == '-' || !+tmpStr || oprPress) tmpStr = '';
		tsDiv.textContent = tmpStr;
	}
};

const displayEqual = function(){
	const tsDiv = document.querySelector('#topScreen');
	if((+tmpStr || tmpStr == '0') && opr){
		numArryPush(+tmpStr);
		if(numArry.length == 2){
			tsDiv.textContent = +operate(opr, numArry[0], numArry[1]).toFixed(13);
			tmpStr = tsDiv.textContent;
		}
	}
	else if(numArry.length == 1){
		tsDiv.textContent = numArry[0];
		tmpStr = tsDiv.textContent;
	}
	opr = '=';
	numArry = [];
	oprPress = true;
};

const toDecimalPlace = function(tdp){
	const tsDiv = document.querySelector('#topScreen');
	if(tsDiv.textContent){
		tsDiv.textContent = (+tsDiv.textContent).toFixed(tdp);
		tmpStr = tsDiv.textContent;
	}
};

const screenDiv = document.querySelector('#topScreen');
screenDiv.style.backgroundColor = genColor();

const num0Btn = document.querySelector('#num0Id');
num0Btn.style.backgroundColor = numBtnColor;
num0Btn.onclick = function(){
	if(tmpStr != '0') displayDigit('0');
};

// decimal point button
const decPtBtn = document.querySelector('.pntBtn');
decPtBtn.style.backgroundColor = numBtnColor;
decPtBtn.onclick = function(){
	displayDecimalPoint();
};

// Button for unary plus or minus operator
const plusMinusBtn = document.querySelector('.pmBtn');
plusMinusBtn.style.backgroundColor = numBtnColor;
plusMinusBtn.onclick = function(){
	const tsDiv = document.querySelector('#topScreen');
	if(+tmpStr){
		if(oprPress){
			if(opr == '=') opr = tmpStr = '';
			oprPress = false;
		}
		if(+tmpStr){
			tmpStr = -tmpStr + '';
			tsDiv.textContent = tmpStr;
		}
	}
};

const plusBtn = document.querySelector('.plsBtn');
plusBtn.style.backgroundColor = numBtnColor;
plusBtn.onclick = function(){
	displayOperator('+');
};

const equalBtn = document.querySelector('.eqlBtn');
equalBtn.style.backgroundColor = numBtnColor;
equalBtn.onclick = function(){
	displayEqual();
};

const num1Btn = document.querySelector('.num1Btn');
num1Btn.style.backgroundColor = numBtnColor;
num1Btn.onclick = function(){
	displayDigit('1');
};

const num2Btn = document.querySelector('.num2Btn');
num2Btn.style.backgroundColor = numBtnColor;
num2Btn.onclick = function(){
	displayDigit('2');
};

const num3Btn = document.querySelector('.num3Btn');
num3Btn.style.backgroundColor = numBtnColor;
num3Btn.onclick = function(){
	displayDigit('3');
};

const minusBtn = document.querySelector('.mnsBtn');
minusBtn.style.backgroundColor = numBtnColor;
minusBtn.onclick = function(){
	displayOperator('-');
};

const num4Btn = document.querySelector('.num4Btn');
num4Btn.style.backgroundColor = numBtnColor;
num4Btn.onclick = function(){
	displayDigit('4');
};

const num5Btn = document.querySelector('.num5Btn');
num5Btn.style.backgroundColor = numBtnColor;
num5Btn.onclick = function(){
	displayDigit('5');
};

const num6Btn = document.querySelector('.num6Btn');
num6Btn.style.backgroundColor = numBtnColor;
num6Btn.onclick = function(){
	displayDigit('6');
};

// Button rounds to the nearest integer
const dec0Btn = document.querySelector('.rnd0Btn');
dec0Btn.style.backgroundColor = numBtnColor;
dec0Btn.onclick = function(){
	toDecimalPlace(0);
};

const timesBtn = document.querySelector('.mltBtn');
timesBtn.style.backgroundColor = numBtnColor;
timesBtn.onclick = function(){
	displayOperator('×');
};

const num7Btn = document.querySelector('.num7Btn');
num7Btn.style.backgroundColor = numBtnColor;
num7Btn.onclick = function(){
	displayDigit('7');
};

const num8Btn = document.querySelector('.num8Btn');
num8Btn.style.backgroundColor = numBtnColor;
num8Btn.onclick = function(){
	displayDigit('8');
};

const num9Btn = document.querySelector('.num9Btn');
num9Btn.style.backgroundColor = numBtnColor;
num9Btn.onclick = function(){
	displayDigit('9');
};

// Button rounds to 2 decimal places 
const dec2Btn = document.querySelector('.rnd2Btn');
dec2Btn.style.backgroundColor = numBtnColor;
dec2Btn.onclick = function(){
	toDecimalPlace(2);
};

const divideBtn = document.querySelector('.dvdBtn');
divideBtn.style.backgroundColor = numBtnColor;
divideBtn.onclick = function(){
	displayOperator('÷');
};

const digitsDiv = document.querySelector('#digitsDiv');
digitsDiv.style.backgroundColor = genColor();

const piBtn = document.querySelector('#piBtnId');
piBtn.style.backgroundColor = funcBtnColor;
piBtn.onclick = function(){
	const tsDiv = document.querySelector('#topScreen');
	tsDiv.textContent = Math.PI;
	tmpStr = tsDiv.textContent;
	oprPress = true;
};

const sqrtBtn = document.querySelector('.sqrtBtn');
sqrtBtn.style.backgroundColor = funcBtnColor;
sqrtBtn.onclick = function(){
	if(+tmpStr){
		const tsDiv = document.querySelector('#topScreen');
		tsDiv.textContent = Math.sqrt(tmpStr);
		tmpStr = tsDiv.textContent;
		oprPress = true;
	}
};

const sqBtn = document.querySelector('.sqBtn');
sqBtn.style.backgroundColor = funcBtnColor;
sqBtn.onclick = function(){
	if(+tmpStr){
		const tsDiv = document.querySelector('#topScreen');
		tsDiv.textContent = +Math.pow(tmpStr, 2).toFixed(13);
		tmpStr = tsDiv.textContent;
		oprPress = true;
	}
};

const percentBtn = document.querySelector('.pcgBtn');
percentBtn.style.backgroundColor = funcBtnColor;
percentBtn.onclick = function(){
	displayPercent();
};

// Backspace button
const bkSpBtn = document.querySelector('.bsBtn');
bkSpBtn.style.backgroundColor = funcBtnColor;
bkSpBtn.onclick = function(){
	displayBackspace();
};

// Memory clear button
const memClrBtn = document.querySelector('.mcBtn');
memClrBtn.style.backgroundColor = funcBtnColor;
memClrBtn.onclick = function(){
	const lbl = document.querySelector('label');
	lbl.style.visibility = 'hidden';
	memStore = null;
};

// Add to memory button
const memAddBtn = document.querySelector('.mpBtn');
memAddBtn.style.backgroundColor = funcBtnColor;
memAddBtn.onclick = function(){
	const tsDiv = document.querySelector('#topScreen');
	if(+tsDiv.textContent){
		memStore += +tsDiv.textContent;
		tmpStr = tsDiv.textContent;
		const lbl = document.querySelector('label');
		lbl.style.visibility = 'visible';
	}
};

// Subtract from memory button
const memSubBtn = document.querySelector('.mmBtn');
memSubBtn.style.backgroundColor = funcBtnColor;
memSubBtn.onclick = function(){
	const tsDiv = document.querySelector('#topScreen');
	if(+tsDiv.textContent){
		memStore -= +tsDiv.textContent;
		tmpStr = tsDiv.textContent;
		const lbl = document.querySelector('label');
		lbl.style.visibility = 'visible';
	}
};

// Recall memory button
const memRecBtn = document.querySelector('.mrBtn');
memRecBtn.style.backgroundColor = funcBtnColor;
memRecBtn.onclick = function(){
	if(memStore || memStore == 0){
		const tsDiv = document.querySelector('#topScreen');
		tsDiv.textContent = tmpStr = memStore;
	}
};

const clearBtn = document.querySelector('.acBtn');
clearBtn.style.backgroundColor = funcBtnColor;
clearBtn.onclick = function(){
	const tsDiv = document.querySelector('#topScreen');
	tsDiv.textContent = '';
	oprPress = false;
	numArry = [];
	tmpStr = '';
	opr = '';
};

const funcDiv = document.querySelector('#funcDiv');
funcDiv.style.backgroundColor = genColor(); 

const container = document.querySelector('#container');
container.style.backgroundColor = genColor();

const html = document.querySelector('html');
html.onkeyup = function(event){
	let ky = event.key;
	if(ky == '0'){
		if(tmpStr != '0') displayDigit(ky);
	}
	else if(ky.search(/\d/) >= 0){
		displayDigit(ky);
	}
	else if(ky == '.'){
		displayDecimalPoint(); 
	}
	else if(ky == '%'){
		displayPercent();
	}
	else if(ky.toLowerCase() == 'backspace'){
		displayBackspace();
	}
	else if(ky == '=' || ky.toLowerCase() == 'enter'){
		displayEqual();
	}
	else if(['×', '÷', '+', '*', '/', '-'].includes(ky)){
		displayOperator(ky);
	}
};
