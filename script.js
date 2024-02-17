"use strict";

/* Inherit from SyntaxError. */
class FormatError extends SyntaxError{
	constructor(message){
		super(message);
		this.name = this.constructor.name;
	}
}
