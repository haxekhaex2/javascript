"use strict";

/* function showMessage(from = "No user given.", text = "No text given."){
	alert(String(from) + ": " + String(text));
}

showMessage();
showMessage();

let user = new Object();
user = {name: "John", age: 30};
alert(user.name);
alert(user.age);
delete user.name;
delete user.age;

user["likes birds"] = true;
alert(user["likes birds"]);
delete user["likes birds"];

let key = "likes birds";
user[key] = true;

key = prompt("What would you like to know about the user?", "name");
alert(user[key]);

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {[fruit]: 5};
alert(bag["apple"]);

alert("name" in user);
alert("age" in user);
alert("blabla" in user);

for(let key in user){
	alert(user[key] + " is being deleted!");
	delete user[key];
} */

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(object){
	for(let key in object) return false;
	return true;
}

let salaries = {John: 100, Ann: 160, Pete: 130};
let sum = 0;
for(let key in salaries){
	sum += salaries[key];
}

function multiplyNumeric(object){
	for(let key in object){
		if(typeof object[key] === 'number'){
			object[key] *= 2;
		}
	}
}
