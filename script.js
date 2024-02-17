"use strict";

/* Finally or just the code? */
try{
	/* Here, perform an operation that may or may not result in an error. */
	throwError(); /* No such function throwError(). */
}catch(error){
	if(!(error instanceof SyntaxError)) throw(error); /* In the case that it wasn't a syntax error, rethrow it. */
	console.log(error); /* In the case that it was, log it. */
}finally{
	/* If an error was rethrown in the previous catch block, then this finally clause is needed to do cleanup. */
	doCleanupForTheTryBlock();
}
