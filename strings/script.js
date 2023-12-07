

// Function to return the length of a string
function customLength(str) {
    let count = 0;
    for (let char of str) {
      count++;
    }
    return count;
  }
 
  
  // Function to return a piece of a string using slice
  function customSlice(str, start, end) {
    let slicedStr = '';
    for (let i = start; i < end && i < str.length; i++) {
      slicedStr += str[i];
    }
    return slicedStr;
  }
  

  // Function to replace the first instance of a matching character in a string
  function customReplace(str, target, replacement) {
    let result = '';
    let found = false;
    for (let char of str) {
      if (char === target && !found) {
        result += replacement;
        found = true;
      } else {
        result += char;
      }
    }
    return result;
  }
  
  // Function to replace all instances of a matching character in a string
  function customReplaceAll(str, target, replacement) {
    let result = '';
    for (let char of str) {
      if (char === target) {
        result += replacement;
      } else {
        result += char;
      }
    }
    return result;
  }
  
  // Function to merge two strings together
  function customConcat(str1, str2) {
    let result = '';
    for (let char of str1) {
      result += char;
    }
    for (let char of str2) {
      result += char;
    }
    return result;
  }
  
  // Function to access a character from a string using charAt
  function customCharAt(str, index) {
    if (index < 0 || index >= str.length) {
      return ''; // return an empty string for invalid index
    }
    return str[index];
  }
  
  


  x