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

let foo;
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

let message = login == 'Employee' ? 'Hello' : login == 'Director' ? 'Greetings' : login == '' ? 'No login' : '';

