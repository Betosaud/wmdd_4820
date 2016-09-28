/*
Recursion

We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by
 using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive 
 whole number is even or odd:

 Zero is even.

 One is odd.

 For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept 
a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?*/

function isEven(theNumber) {	//declaration of the function isEven, with one parameter
  
  if (theNumber == 0) return true; // tests if number is 0, therefore even
 
  else if (theNumber == 1) return false; // tests if number is 1, therefore odd
 
  else if (theNumber < 0) return isEven (-theNumber); //tests if number is negative. In this case, call the function again, turning the number into positive
 
  else return isEven (theNumber - 2); // if no conditions apply, it means the number is greater than 1, then we call the function again subtracting 2 recursively until the number is equal 0 or 1.
  
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false