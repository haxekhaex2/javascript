"use strict";

/* Sum numbers from visitor. */
let foo = Number(prompt("Please insert a number.", 10));
let bar = Number(prompt("Please insert another number.", 20));
alert(foo + bar);

/* toFixed(). */
alert(1.35.toFixed(1)); /* 1.3 */
alert(6.35.toFixed(1)); /* 1.4 */

/* Repeat until input is a number. */
function readNumber(){
	let number;
	
	do{
		number = prompt("Enter a number, please.", 0);
		if(number == "CANCEL" || number == "") return null;
	}while(!isFinite(number));
	
	if(number === null || number === "") return null;
	
	return Number(number);
}

alert(readNumber());

/* A random number from min to max. */
function random(min, max){
	return Math.random() * (max - min) + min;
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

/* A random integer from min to max. */
function randomInteger(min, max){
	return parseInt(Math.floor(Math.random() * (max + 1 - min) + min));
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));
