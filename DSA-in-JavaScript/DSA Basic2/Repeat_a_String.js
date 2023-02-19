// Repeat a String Repeat a String

// repeatStringNumTimes("*", 3) should return the string ***.

// repeatStringNumTimes("abc", 3) should return the string abcabcabc.

// repeatStringNumTimes("abc", 4) should return the string abcabcabcabc.

// repeatStringNumTimes("abc", 1) should return the string abc.

// repeatStringNumTimes("*", 8) should return the string ********.

// repeatStringNumTimes("abc", -2) should return an empty string ("").


function repeatStringNumTimes(str, num) {
    let repeatedString = "";
    for (let i=0; i<num; i++){
      repeatedString += str;
    }
    return repeatedString;
  }
  
  
  
  const res = repeatStringNumTimes("abc", 3);
  console.log(res)