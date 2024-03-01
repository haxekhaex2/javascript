"use strict";

/* Count descendants. */
for(let listItem in document.querySelectorAll("li")){
    console.log(listItem.data + Array.from(listItem.querySelectorall("li")).length);
}

/* Clear the element. */
function clear(elem) {
	elem.innerHTML = "";
}

/* Create a list. */
function createList(){
	let ul = document.createElement("ul");
	let pr;
	while(pr = prompt("Enter list item text.", "Put text here."){
		let li = document.createElement("li");
		li.innerText = pr;
		ul.append(li);
	}
	return ul;
}

/* Create a tree. */
let data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};

createTree(data);

function createTree(data){
	let ul = document.createElement("ul");
	for(let property of Object.keys(data)){
		let li = document.createElement("li");
		li.innerText = property;
		li.appendChild(createTree(data[property]));
		ul.appendChild(li);
	}
	return ul;
}


