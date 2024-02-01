"use strict";

/* Filter unique array members. */
function unique(array){
	let set = new Set();
	for(let element of array){
		set.add(element);
	}
	return Array.from(set);
}

/* Filter anagrams. */
function aclean(array){
	/* let clone = array.map(function(element){return Array.from(element).sort();});
	let set = new Set(clone);
	
	set.forEach(function(setElement){array.filter(function(arrayElement){return Array.from(arrayElement).sort() === setElement;});});
	return array; */
	
	/* let uniqueAnagrams = Array.from(new Set(array.map(function(element){return Array.from(element.toLowerCase()).sort().join("");})));
	
	uniqueAnagrams.forEach(function(uniqueAnagram){
		filteredArray.push(array.find(function(arrayElement){
			return uniqueAnagram === Array.from(arrayElement.toLowerCase()).sort().join("");
		}));
	}); */
	
	let filteredArray = new Array();
	Array.from(new Set(array.map(function(element){return Array.from(element.toLowerCase()).sort().join("");}))).forEach(function(uniqueAnagram){filteredArray.push(array.find(function(arrayElement){return uniqueAnagram === Array.from(arrayElement.toLowerCase()).sort().join("");}));});
	return filteredArray;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

aclean(arr);
alert(aclean(arr));
