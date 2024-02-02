"use strict";

/* Sum the properties. */
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries){
	let sum = 0;
	for(let salary of Object.values(salaries)){
		sum += Number(salary);
	}
	return sum;
}

alert(sumSalaries(salaries));

/* Count properties. */
function count(object){
	return Object.values(object).length;
}
