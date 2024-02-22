"use strict";

/* Error on reading non-existent property. */
let user = {
	name: "John"
};

function wrap(target){
	return new Proxy(target, {
		get(target, property, receiver){
			if(property in target) throw new Error("No such property.");
			return Reflect.get(target, property, receiver);
		}
	});
}

user = wrap(user);

alert(user.name);
alert(user.age);

/* Accessing array[-1]. */
let array = [1, 2, 3];

array = new Proxy(array, {
	get(target, property, receiver){
		if(Math.sign(property) === -1) property += target.length;
		Reflect.get(target, property, receiver);
	},
	set(target, property, value, receiver){
		if(Math.sign(property) === -1) property += target.length;
		Reflect.set(target, property, value, receiver);
		return true;
	}
});

array[-1];
array[-2];
array[-3];

/* Observable. */
function makeObservable(target){
	target.observe = function(handler){
		this.handler = handler;
	};
	
	return new Proxy(target, {
		
		set(target, property, value, receiver){
			if(target.handler) handler(property, value);
			Reflect.set(target, property, value, receiver);
			return true;
		}
	});
}

let user = {};
user = makeObservable(target);

user.observe((key, value) => {
	alert(`SET ${key}=${value}`);
});

user.name = "John";
