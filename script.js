"use strict";

/* Is array copied? */
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
alert(fruits.length); /* Will alert 4. */

/* Array operations. */
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.ceil(styles.length / 2)] = "Classic";
alert(styles.shift());
styles.unshift("Rap", "Reggae");

/* Calling in an array context. */
let arr = ["a", "b"];
arr.push(function(){alert(this);});
arr[2]();

/* Sum input numbers. */
function sumInput(){
	let array = Array();
	let number;
	while(isFinite(number = prompt("Please enter a number.", 10))) array.push(Number(number));
	let sum;
	for(let value of array) sum += value;
	return sum;
}

/* A maximal subarray. */
function getMaxSubSum(arr){
	let maxSum = 0;
	let partialSum = 0;
	for(let item of arr){
		partialSum += item;
		maxSum = Math.max(maxSum, partialSum);
		if(partialSum < 0) partialSum = 0;
	}
	return maxSum;
}
