"use strict";

/* Add toString to the dictionary. */
let dictionary = Object.create(null);

Object.defineProperty(dictionary, "toString", {
	value: function(){
		return Object.keys(this).join(", ");
	},
	enumerable: false
});

dictionary.apple = "Apple";
dictionary.__proto__ = "__test__"; /* __proto__ is a regular property key here. */