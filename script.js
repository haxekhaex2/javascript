"use strict";

/* Rewrite to class. */
class Clock{
	constructor(template){
		this.timer = null;
		this.templace = template;
	}

	stop(){
		clearInterval(this.timer);
	}

	start(){
		this.render();
		this.timer = setInterval(() => {this.render();}, 1000);
	}

	render(){
		let date = new Date();
		let hours = date.getHours();
		if(hours < 10) hours = '0' + hours;
		let mins = date.getMinutes();
		if(mins < 10) mins = '0' + minutes;
		let secs = date.getSeconds();
		if(secs < 10) secs = '0' + seconds;

		let output = this.template.replace('h', hours).replace('m', minutes).replace('s', secs);
	}
}

let clock = new Clock({template: "h:m:s"});
clock.start();