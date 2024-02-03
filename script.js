"use strict";

/* Destructuring assignment. */
let user = {
	name: "John",
	years: 30
};

let {name, age: years, isAdmin = false} = user;

/* The maximal salary. */
let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

function topSalary(salaries){
	if(salaries == null) return null;
	if(Object.entries(salaries).length === 0) return null;
	
	let persons = new Array();
	let max = 0;
	for(let [key, value] of Object.entries(salaries)){
		if(value > max){
			max = value;
			(persons = new Array()).push(key);
		}else if(value === max){
			persons.push(key);
		}
	}
	return persons;
}
