/******************
 * YOUR CODE HERE *
 ******************/

//xify - returns the same string but with every character replaced by an 'x'

function xify(str) {
  let outputString = '';
  for (let i = 0; i < str.length; i++) {
    outputString = outputString + 'x';
  }
  return outputString;
}


// yellingChars - returns the given string with an exclamation point after each character

function yellingChars(str) {
  let outputString = '';
  for (let i = 0; i < str.length; i++) {
    outputString = outputString + `${str[i]}!`
  }
  return outputString;
}

// indexedChars -adds the index of each character before that character in the given string

function indexedChars(str) {
  let outputString = '';
  for (let i = 0; i < str.length; i++) {
    outputString =  outputString + i + str[i];
  }
  return outputString;
}

// numberedChars -adds the number of each character before that character  in the given string
// numberedChars('Hello') -->  '(1)h(2)e(3)l(4)l(5)o'

function numberedChars(str) {
  let outputString = '';
  for (let i = 0; i < str.length; i++) {
    let charNum = i + 1;
    outputString =  outputString + `(${charNum})` + str[i];
  }
  return outputString;
}




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
