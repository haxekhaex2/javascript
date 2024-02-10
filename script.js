"use strict";

/* Fix a function that loses "this". */
function askPassword(ok, fail){
	let password = prompt("Password?", "");
	if(password == "rockstar") ok();
	else fail();
}

let user = {
	name: "John",

	loginOk(){
		alert(`${this.name} logged in.`);
	},

	loginFail(){
		alert(`${this.name} failed to log in.`);
	}
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

/* Partial application for login. */
function askPassword(ok, fail){
	let password = prompt("Password?", "");
	if(password == "rockstar") ok();
	else fail();
}

user = {
	name: "John",

	login(result){
		alert(this.name + (result ? "Logged in." : "Failed to log in."));
	}
}

askPassword(user.login.bind(user, true), user.login.bind(user, false));