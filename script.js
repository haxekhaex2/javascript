"use strict";

/* Turn the object into JSON and back. */
let user = {
	name: "John Smith",
	age: 35
};

let userJSON = JSON.stringify(user);
let userParsed = JSON.parse(userJSON);

console.log(userParsed.name + ", " + userJSON);

/* Exclude backreference. */
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value){
	var meetup = key === "" ? value : meetup;
	return value === meetup ? undefined : value;
}));
