"use strict";

/* Add method "f.defer(ms)" to functions. */
Function.prototype.defer = function(ms){
	setTimeout(this, ms);
};

function f(){
	alert("Hello!");
}

f.defer(1000);

/* Add decorating "defer()" to functions. */
Function.prototype.defer = function(ms){
	let f = this;
	return function(...args){
		setTimeout(() => {f.apply(this, args);}, ms);
	}
};