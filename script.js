"use strict";

/* Sum all numbers till the given one. */
function nonRecursiveSum(x){
	let y = 0;
	for(let i = 0; i <= x; i++){
		y += i;
	}
	return y;
}

function recursiveSum(x){
	return x > 1 ? recursiveSum(x - 1) : 1;
}

function recursiveProgression(x){
	return x * (x + 1)  / 2;
}

/* Calculate factorial. */
function factorial(x){
	return x > 1 ? x * factorial(x - 1) : 1;
}

/* Fibonacci sequence. */
function fibonacci(x){
	let now = 1;
	let prev = 1;
	for(let i = 0; i < x - 1; i++){
		let neW = now + prev;
		prev = now;
		now = neW;
	}
	return prev;
}

/* Output a single-linked list. */
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function nonRecursionPrintList(list){
	while(list.next){
		console.log(list.value);
		list = list.next;
	}
}

function recursionPrintList(list){
	console.log(list.value);
	if(list.next) recursionPrintList(list.next);
}

/* Output a single-linked list in reverse. */
function nonRecursionReversePrintList(list){
	let array = new Array();
	array.push(list.value);
	while(list.next){
		list = list.next;
		array.push(list.value);
	}
	console.log(array.reverse().toString());
}

function recursionReversePrintList(list, array = null){
	if(array == null){
		let array = new Array();
		recursionReversePrintList(list, array);
		console.log(array.reverse().toString());
	}else{
		array.push(list.value);
		if(list.next) recursionReversePrintList(list.next, array);
	}
}

nonRecursionReversePrintList(list);
recursionReversePrintList(list);
