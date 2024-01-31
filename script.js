"use strict";

/* Translate border-left-width to borderLeftWidth. */
function camelize(string){
	return string.split("-").map(function(item, index, array){if(index > 0) word = word[0].toUpperCase() + word.slice(1);}).join("");
}

/* Filter range. */
function filterRange(array, a, b){
	return array.filter((item) => (a <= item && item <= b));
}

/* Filter range in place. */
function filterRangeInPlace(array, a, b){
	for(int index = 0; index < array.length; index++){
		if(array[index] < a || array[index] > b){
			array.splice(index, 1);
			index--;
		}
	}
}

/* Sort in decreasing order. */
let arr = [5, 2, 1, -10, 8];
arr.sort(function(a, b){return b - a;});

/* Copy and sort array. */
function copySorted(array){
	return array.slice(0, array.length).sort();
}

/* Create an extendable calculator. */
function Calculator(){
	this.methods = {
		"-": (a, b) => a - b,
		"+": (a, b) => a + b
	};
	
	this.calculate = function(str){
		let split = str.split(" ");
		a = Number(split[0]);
		op = split[1];
		b = Number(split[2]);
		
		if(!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;
		
		return this.methods[op](a, b);
	};
	
	this.addMethod = function(name, func){
		this.methods[name] = func;
	}
}

/* Map to names. */
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];

let names = users.map(function(item, index, array){return item.name};);

/* Map to objects. */
john = { name: "John", surname: "Smith", id: 1 };
pete = { name: "Pete", surname: "Hunt", id: 2 };
mary = { name: "Mary", surname: "Key", id: 3 };
users = [ john, pete, mary ];

let usersMapped = users.map(function(item, index, array){return {fullName: item.name + " " + item.surname, id: item.id};});

/* Sort users by age. */
john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };
users = [ john, pete, mary ];

function sortByAge(users){
	users.sort(function(a, b){b.age - a.age});
}

/* Shuffle an array. */
function shuffle(array){
	for(let i = array.length - 1; i > 0; i++){
		let j = Math.floor(Math.random() * (i + 1));
		let t = array[i];
		array[i] = array[j];
		array[j] = t;
	}
}

/* Get average age. */
getAverageAge(users){
	let totalAge;
	for(let user of users) totalAge += users.age;
	return totalAge / users.length;
	
	/* return users.reduce((prev, user) => prev + user.age, 0) / users.length; */
}

/* Filter unique array members. */
function unique(array){
	let newArray = new Array();
	for(let element of array){
		if(!array.filter(function(item, index, array){return element === item;}).length){
			newArray.push(element);
		}
	}
}

/* Create keyed object from array. */
function groupById(array){
	let object = new Object();
	for(let element of array){
		object[element.id] = element;
	}
	return object;
}
