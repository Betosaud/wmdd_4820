/*
Bean counting

You can get the Nth character, or letter, from a string by writing "string".charAt(N), 
similar to how you get its length with "s".length. The returned value will be a string 
containing only one character (for example, "b"). The first character has position zero, 
which causes the last one to be found at position string.length - 1. In other words, a 
two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number 
that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second 
argument that indicates the character that is to be counted (rather than counting only 
uppercase “B” characters). Rewrite countBs to make use of this new function.*/


function countChar(word, letter) {  //declaration of function CountChar
  var counter = 0;  // declaration of counter variable
  for (var i = 0; i < word.length; i++) {  // for will loop for (word.lenth-1) times
    if (word.charAt(i) === letter) counter++;   // tests if the position in the word corresponds with the letter in the argument
  }												// if the letters are the same, counter is increased by 1.
  return counter; // the function returns the number of times the provided letter was found in the word.
}
  
  
  function countBs(word) { //declaration of function CountChar
  var counter = 0;  // declaration of counter variable
  for (var i = 0; i < word.length; i++) {  // for will loop for (word.lenth-1) times
    if (word.charAt(i) === "B") counter++;  // tests if the position in the word corresponds with the letter "B"
  }
  return counter; // the function returns the number of times the letter "B" was found in the word.
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4