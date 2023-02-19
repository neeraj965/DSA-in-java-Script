  // Reverse a String

  // method 1
  
  function reverseString(str) {
    return str
     .split("")
     .reverse("")
     .join("");
  
  }
  
  reverseString("hello");


  // method 2

  function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }