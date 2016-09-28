/*Minimum

The previous chapter introduced the standard function 
Math.min that returns its smallest argument. We can do 
that ourselves now. Write a function min that takes
 two arguments and returns their minimum.*/


function min(a, b) { 	// Declares the function min, that takes two arguments
  if (a < b) {			// Tests from the two given numbers, who is higher
    return a;}			// If it is "a" then, return the value of "a"
  else {				// If "a" is not the bigger one, than "b" is
    return b;}			// return "b"
    }



console.log(min(0, 10)); 	// Prints on console the result returned by the min() call
// → 0
console.log(min(0, -10));	// Prints on console the result returned by the min() call
// → -10