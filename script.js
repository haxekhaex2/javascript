"use strict";

/* Sum with closures. */
function sum(a){
	return function(b){
		return a + b;
	};
}

/* Filter through function. */
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b){
	return function(element){
		return index >= a && index < b;
	}
}

function inArray(givenElements){
	return function(element){
		return givenElements.includes(element);
	};
}

alert( arr.filter(inArray([1, 2, 10])) );

/* Sort by field. */
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field){
	return function(a, b){
		return a.field > b.field ? 1 : -1;
	}
}
