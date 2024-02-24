"use strict";

/* DOM children. */
document.querySelector("div");
document.querySelector("ul");
document.querySelectorAll("ul")[1];

/* Select all diagonal cells. */
Array.from(document.querySelector("td").children).forEach((element, index) => {element.children[index].style.backgroundColor = "red";});
