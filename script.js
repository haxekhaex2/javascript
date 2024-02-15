"use strict";

/* Error creating an instance. */
class Animal{
	constructor(name){
		this.name = name;
	}
}

class Rabbit extends Animal{
	constructor(name){
		super(name);
		this.created = Date.now();
	}
}

let rabbit = new Rabbit("White Rabbit");
alert(rabbit.name);

/* Extended clock. */
class ExtendedClock extends Clock{
	constructor({template}, precision){
		super(template);
		this.precision = precision;
	}
	
	start(){
		this.render();
		this.timer = setInterval(() => this.render(), this.precision);
	}
}
