"use strict";

/* Spy decorator. */
function spy(func){
	function wrapper(...args){
		wrapper.calls.push(args);
		return func.apply(this, args);
	}

	wrapper.calls = [];

	return wrapper;
}

/* Delaying decorator. */
function delay(func, ms){
	return function(){
		setTimeout(() => {func.apply(this, argruments);}, ms);
	};
}

/* Debounce decorator. */
function debounce(f, ms){
	let timeoutHandle = null;

	return function(){
		clearTimeout(timeoutHandle);
		timeoutHandle = setTimeout(() => {
			f.apply(this, arguments);
		}, ms);
	}
}

/* Throttle decorator. */
function throttle(f, ms){
	let counter = 0;
	let timeoutHandle = null;
	let thisArray = [];
	let argumentsArray = [];
	return function(){
		counter++;
		thisArray.push(this);
		argumentsArray.push(arguments);
		if(!timeoutHandle) timeoutHandle = setInterval(() => {
			if(counter === 0){
				clearTimeout(timeoutHandle);
				timeoutHandle = null;
				return;
			}
			f.apply(thisArray.shift(), argumentsArray.shift());
			counter--;
		}, ms);
	}
}