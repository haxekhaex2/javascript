"use strict";

// Using "this" in an object literal.
function makeUser(){
	return {name: "John", ref: this};
}

let user = makeUser();
alert(user.ref.name); // Undefined access.

// Create a calculator.
let calculator = new Object();
calculator.read = function(){
	this.a = Number(prompt("Value of a:", 10));
	this.b = Number(prompt("Value of b:", 20));
};
calculator.sum = function(){
	return this.a + this.b;
};
calculator.mul = function(){
	return this.a * this.b;
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// Chaining.
let ladder = {
	step: 0,
	up(){
		this.step++;
		return this;
	},
	down(){
		this.step--;
		return this;
	},
	showStep: function(){
		alert(this.step);
		return this;
	}
};

ladder.up().up().down().showStep().down().showStep();
