"use strict";

/* let result = prompt("Hello, world!", "Woah...");
let message = 'Hello!';
confirm("Hello!");
alert(message);

let a = 1, b = 1;
let c = ++a;
let d = b++;

let a = 2;
let x = 1 + (a *= 2);  */

/* if(prompt("The \"official\" name of Javascript?") == "ECMAScript"){
    alert("Right!");
}else{
    alert("You don't know? It's ECMAScript!");
} */

/* let foo;
if((foo = Number(prompt("Write a number in here."))) > 0){
    alert("1");
}else if(foo < 0){
    alert("-1");
}else{
    alert("0");
}

let a = 1;
let b = 2;
let result = a + b < 4 ? 'Below' : 'Over';

let message = login == 'Employee' ? 'Hello' : login == 'Director' ? 'Greetings' : login == '' ? 'No login' : ''; */

/*
let i = 0;
while(i < 3){
    alert(i);
    i++;
}

i = 0;
do{
    alert(i);
    i++;
}while(i < 3);

for(let i = 0; i < 3; i++){
	
}

if(browser === 'Edge'){
	alert("You\'ve got the Edge!");
}else if(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
	alert("Okay, we support these too.");
}else{
	alert("We hope this page looks ok!");
}

let a = +prompt('a?', '');
switch(a){
	case 0:
		alert('0');
		break;
	case 1:
		alert('1');
		break;
	case 2:
	case 3:
		alert('2,3');
		break;
	default:
		break;
} */

function showMessage(from = "No user given.", text = "No text given."){
	alert(String(from) + ": " + String(text));
}

/* function name(parameter1, parameter2, ... parameterN){
	//body
} */

showMessage();
showMessage();
