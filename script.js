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

/* Create a calendar. */
function createCalendar(elem, year, month){
	let table = document.createElement("table");
	let thead = document.createElement("thead");
	table.appendChild(thead);
	let tbody = document.createElement("tbody");
	table.appendChild(tbody);
	elem.appendChild(table);

	for(let i = 0; i < 7; i++){
		let weekday = document.createElement("tr");
		let weekdayh = document.createElement("th");
		thead.appendChild(weekday);
		weekday.appendChild(weekdayh);
		switch(i){
			case 0:
				weekdayh.innerText = "SUNDAY";
				break;
			case 1:
				weekdayh.innerText = "MONDAY";
				break;
			case 2:
				weekdayh.innerText = "TUESDAY";
				break;
			case 3:
				weekdayh.innerText = "WEDNESDAY";
				break;
			case 4:
				weekdayh.innerText = "THURSDAY";
				break;
			case 5:
				weekdayh.innerText = "FRIDAY";
				break;
			case 6:
				weekdayh.innerText = "SATURDAY";
				break;
		}
	}

	for(let i = 0; i < 35; i++){
		if(i % 7 == 0){
			table.appendChild(document.createElement("tr"));
		}

		let day = new Date(year, month).getDay();
		let td = document.createElement("td");
		td.innerText = day;
		tbody.lastChild.append(innerText);
	}
}

