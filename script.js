"use strict";

/* Find bottom scroll. */
function scrollBottom(element){
	/* Return how many pixels are not in view from the bottom. */
	return element.scrollHeight - element.scrollTop - element.clientHeight;
}

/* What's the scrollbar width? */
function getScrollbarWidth(){
	let div = document.createElement("div");
	div.style.overflowY = "scroll";
	div.style.width = "50px";
	div.style.height = "50px";
	
	document.body.append(div); /* Let document size div and its components appropriately. */
	let scrollWidth = div.offsetWidth - div.clientWidth; /* It's the size it takes up minus the size it has for content. */
	
	div.remove();
	
	return scrollWidth;
}

alert(getScrollbarWidth());

/* Place the ball in the field center. */
let field = document.getElementById("field");
let fieldCenterX = field.clientWidth / 2;
let fieldCenterY = field.clientWidth / 2;
let ball = document.getElementById("ball");
ball.style.left = Math.round(fieldCenterX - ball.offsetWidth / 2) + "px";
ball.style.top = Math.round(fieldCenterY - ball.offsetHeight / 2) + "px";


