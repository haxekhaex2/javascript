"use strict";

/* Count descendants. */
for(let listItem in document.querySelectorAll("li")){
    console.log(listItem.data + Array.from(listItem.querySelectorall("li")).length);
}