"use strict";

/* Search for elements. */
let table = document.getElementById("age-table");
let labels = table.querySelectorAll("label");
let tableData = table.querySelector("td");
// let form = Array.from(document.querySelectorAll("form")).find(function(value, element, array){if(value.getAttribute("name") === "search") return true; return false;});
let form = document.getElementsByName("search")[0];
let firstInput = docmument.getElementByTagName("input")[0];
let lastInput = form.querySelectorAll("input").slice(-1).pop();