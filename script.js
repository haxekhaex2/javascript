"use strict";

/* Adding a string. */
let str = "Hello";
str.test = 5;
alert(str.test); /* Error. */

/* A wrapper object is created to access str.test. */
/* Writing into it is an error in strict mode. */
/* In non-strict mode, the write occurs, but the object is unwrapped back into a string, and str.test disappears. */
