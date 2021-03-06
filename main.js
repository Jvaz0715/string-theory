/******************
 * YOUR CODE HERE *
 ******************/

//xify - returns the same string but with every character replaced by an 'x'
// Successfully completed!

function xify(str) {
  let outputString = '';
  for (let i = 0; i < str.length; i++) {
    outputString = outputString + 'x';
  }
  return outputString;
}

// yellingChars - returns the given string with an exclamation point after each character
// Successfully completed

function yellingChars(str) {
  let outputString = '';
  for (let i = 0; i < str.length; i++) {
    outputString = outputString + `${str[i]}!`
  }
  return outputString;
}

// indexedChars -adds the index of each character before that character in the given string
// Successfully completed

function indexedChars(str) {
  let outputString = '';
  for (let i = 0; i < str.length; i++) {
    outputString =  outputString + i + str[i];
  }
  return outputString;
}

// numberedChars -adds the number of each character before that character  in the given string
//Successfully completed

function numberedChars(str) {
  let outputString = '';
  for (let i = 0; i < str.length; i++) {
    let charNum = i + 1;
    outputString =  outputString + `(${charNum})` + str[i];
  }
  return outputString;
}
console.log(numberedChars('Hello'));

// exclaim - returns the given sentence with every question mark or period  to an exclamation point
// exclaim('Hello.') --> 'Hello!'

/*function exclaim(str) {
  let outputString = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '.' && str[i] !== '?') {
      outputString = outputString + str[i];
    }
  return outputString;
}

console.log(exclaim('Hello. My name is James. You?'))*/

//repeatIt - returns the given string repeated n times, where n is the second paramater
//Successfully completed

function repeatIt(str, n) {
  let outputString = '';
  for (n; n > 0; n--) {
    outputString += str;
  }
  return outputString;
}

//truncate - shortens a long string to 15 characters plus ...
// truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."

function truncate(str) {
  let truncatedString = '';
  if (str.length < 18) {
    return str;
  }
  for (let i = 0; i < 15; i++) {
    truncatedString = truncatedString + str[i];
  }
  return truncatedString + '...';
}

console.log(truncate("Well, that's just, like, your opinion man."))

//reverse = reverses the given string
// Successfully completed

function reverse(str) {
  let outputString = '';
  for (let i = str.length-1; i >= 0; i--) {
    let charNum = i + 1;
    outputString = outputString + str[i];
  }
  return outputString;
}


// onlyVowels - returns only the vowels from a word
// succcessfully completed

function onlyVowels(str) {
  let outputString = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ||
    str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
      outputString = outputString + str[i]  
    }
  }
  return outputString;
}

// crazyCase - returns the given string with alternating lower and upper cases





 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
