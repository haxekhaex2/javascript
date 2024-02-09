"use strict";

/* Print numbers. */
function printNumbers(from, to){
	console.log(from);
	if(from != to) setTimeout(() => {printNumbers(from + 1, to);}, 1000);
}

function printNumbersSetInterval(from, to){
	let timerId = setInterval((from, to) => {if(from === to){clearInterval(timerId); return;} console.log(from, to); from++;});
}