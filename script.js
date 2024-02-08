"use strict";

/* Set and decrease for counter. */
function counter(){
	counter.number = 0;
	
	counter.set = function(x){
		counter = x;
	}
	
	counter.decrease = function(x){
		return counter.number--;
	}
	
	return counter.number++;
	
}

/* Sum with an arbitrary amount of brackets. */
function sum(a){
	let currentSum = a;
	
	function f(b){
		currentSum += b;
		return f;
	}
	
	f.toString = function(){
		return currentSum;
	}
	
	return f;
}

alert(sum(0)(1)(2)(3)(4)(5));
