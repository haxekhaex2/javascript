"use strict";

/* Uppercase the first character. */
function ucFirst(string){
	if(string.length > 0) return string[0].toUpperCase() + string.slice(1); else return "";
}

alert(ucFirst("aaa"));

/* Check for spam. */
function checkSpam(string){
	let lowerCase = string.toLowerCase();
	return lowerCase.includes("viagra") || lowerCase.includes("xxx");
}

/* Truncate the text. */
function truncate(string, maxLength){
	if(string.length > maxLength){
		if(maxLength < 3){
			return string.substring(0, 3);
		}else{
			let truncated = string.substring(0, maxLength - 3);
			truncated += "...";
			return truncated;
		}
	}
	
	return string;
}

/* Extract the money. */
function extractCurrencyValue(string){
	return Number(string.slice(1));
}
