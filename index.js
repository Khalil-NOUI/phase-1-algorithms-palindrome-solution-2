function isPalindrome(word) {
  // iterate from the beginning of the string to the middle of the string
  for (let i = 0; i<(word.length)/2; i++){
    let firstLetter = word[i];
    let lastLetter = word[((word.length - 1) -i)]
    //compare the letter we're iterating over to the corresponding letter at the end of the string
    //if the letters don't match, return false
    //if we reach the middle, and all the letters match, return true
    return firstLetter === lastLetter;


  }
}
/* 

iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false

if we reach the middle, and all the letters match, return true

*/


/*

  write a function that takes a string as input and check its first letter from the beginning against its first from the last and so on untill it reaches the Middle-letter of the string
  the function return a bollean value depending on the final evaluation of the whole test. 

*/


// You can run `node index.js` to view these console logs
if (require.main === module) {

  //custom tests
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("4554"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("WOW"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("444"));


  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
