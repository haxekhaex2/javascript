"use strict";

/* Rewrite using async/await. */
async function loadJson(url){
	let header = await fetch(url);
	if(!header.status === 200) throw new Error(header.status);
	let json = await header.json();
	return json;
}

loadJson('https://javascript.info/no-such-user.json').catch(alert); 

/* Rewrite  "rethrow" with async/await. */
class HttpError extends Error {
	constructor(response) {
		super(`${response.status} for ${response.url}`);
		this.name = 'HttpError';
		this.response = response;
	}
}

function loadJson(url) {
	return fetch(url)
		.then(response => {
			if (response.status == 200) {
				return response.json();
			} else {
				throw new HttpError(response);
			}
		});
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
	let user;
	while(true){
		let name = prompt("Enter a name?", "iliakan");
		
		try{
			user = await loadJson(`https://api.github.com/users/${name}`);
			break;
		}catch(err){
			if(err instanceof  HttpError && err.response.status === 404){
				alert("No such user, please reenter.");
			}else{
				throw err;
			}
		}
	}
	
	alert(`Full name: ${user.name}.`);
	return user;
}

demoGithubUser();

/* Call async from non-async. */
async function wait(){
	await new Promise(resolve => setTimeout(resolve, 1000));
	return 10;
}

function f(){
	wait().then(value => alert(value));
}

f();
